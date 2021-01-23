import { FunctionalComponent } from 'preact';
import { GetStaticProps } from 'next';
import useSWR from 'swr';

import client from 'lib/db';
import fetcher from 'lib/fetcher';
import Container from 'components/Container';
import Add from 'components/Guestbook/Add';
import Entries from 'components/Guestbook/Entries';

type GuestbookProps = {
  entries: {
    _id: number;
    name: string;
    comment: string;
    createdAt: string;
  }[];
};

const title = 'Guestbook';
const description = 'Sign my digital guestbook and share some wisdom.';
const url = 'https://gfung.net/guestbook';

export const getStaticProps: GetStaticProps = async () => {
  await client.connect();

  const entries = await client
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
  const { data } = useSWR('/api/guestbook/entries', fetcher, {
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
      <Add initEntries={data} />
      <Entries entries={data} />
    </Container>
  );
};

export default Guestbook;
