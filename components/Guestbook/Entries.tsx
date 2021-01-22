import { FunctionalComponent } from 'preact';
import Entry from 'components/Guestbook/Entry';

type EntriesProps = {
  entries: {
    _id: number;
    name: string;
    comment: string;
    createdAt: string;
  }[];
};

const Entries: FunctionalComponent<EntriesProps> = ({ entries }) => (
  <div className="mt-8 space-y-8">
    {entries.map(entry => (
      <Entry
        name={entry.name}
        comment={entry.comment}
        createdAt={entry.createdAt}
        key={entry._id}
      />
    ))}
  </div>
);

export default Entries;
