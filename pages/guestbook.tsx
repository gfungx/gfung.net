import type { FunctionalComponent } from 'preact';
import type { GetStaticProps } from 'next';
import type { Entries, Entry as EntryType } from 'types/guestbook';

import { MongoClient } from 'mongodb';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/client';
import useSWR from 'swr';

import fetcher from 'lib/internalFetcher';
import Container from 'components/Container';
import Entry from 'components/Guestbook/Entry';
import Spinner from 'components/Spinner';

type GuestbookProps = {
  entries: Entries;
};

const title = 'Guestbook';
const description = 'Sign my digital guestbook and share some wisdom.';
const url = 'https://gfung.net/guestbook';

const Sign = dynamic(() => import('components/Guestbook/Sign'), { loading: () => <Spinner /> });
const Login = dynamic(() => import('components/Guestbook/Login'), { loading: () => <Spinner /> });

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
      <h1 className="heading">Guestbook</h1>
      <p className="text-lg my-4">
        Feel free to leave anything (within reason) down below. Maybe some wisdom or something
        educational, surprise me!
      </p>
      <div className="w-full border bg-blue-50 dark:bg-blue-opaque border-blue-100 dark:border-gray-800 shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-150 rounded p-6 mt-4">
        {session ? <Sign initEntries={data!} /> : <Login />}
      </div>
      <div className="mt-8 space-y-8">
        {data!.map(({ name, comment, email, createdAt }) => (
          <Entry
            name={name}
            comment={comment}
            email={email}
            createdAt={createdAt}
            key={`${comment}${createdAt}`}
            data={data!}
          />
        ))}
      </div>
    </Container>
  );
};

export default Guestbook;
