import type { FunctionalComponent } from 'preact';
import type { GetStaticProps } from 'next';
import type { Entries, Entry as EntryType } from 'types/guestbook';

import { MongoClient } from 'mongodb';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import Container from 'components/Container';
import Entry from 'components/Guestbook/Entry';

type GuestbookProps = {
  entries: Entries;
};

const title = 'Guestbook';
const description = 'Sign my digital guestbook and share some wisdom.';
const url = 'https://gfung.net/guestbook';

const Sign = dynamic(() => import('components/Guestbook/Sign'));
const Login = dynamic(() => import('components/Guestbook/Login'));

export const getStaticProps: GetStaticProps = async () => {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGODB_USER!}:${process.env
      .MONGODB_PASSWORD!}@gfung.cwn09.mongodb.net?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  await client.connect();

  const entries: EntryType[] = await client
    .db('guestbook')
    .collection('entries')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  await client.close();

  return {
    props: {
      entries: JSON.parse(JSON.stringify(entries))
    },
    revalidate: 1
  };
};

const Guestbook: FunctionalComponent<GuestbookProps> = ({ entries }) => {
  const [session] = useSession();

  const { data } = useSWR<Entries>('/api/guestbook/entries', fetcher, {
    initialData: entries,
    refreshInterval: 100
  });

  return (
    <Container SEO={{ title, description, url }}>
      <h1 className="font-bold text-5xl">Guestbook</h1>
      <p className="my-4">
        Welcome! Feel free to leave anything (within reason) down below. Maybe some wisdom or
        something educational, surprise me!
      </p>
      <div className="w-full border bg-blue-50 border-blue-200 rounded p-6 mt-4">
        {session ? <Sign initEntries={data!} /> : <Login />}
      </div>
      <div className="mt-8 space-y-8">
        {data!.map(({ name, comment, createdAt }) => (
          <Entry
            name={name}
            comment={comment}
            createdAt={createdAt}
            key={`${comment}${createdAt}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Guestbook;
