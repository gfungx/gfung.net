import { FunctionalComponent } from 'preact';

import { Entries as EntriesType } from 'global';
import Entry from 'components/Guestbook/Entry';

type EntriesProps = {
  entries: EntriesType;
};

const Entries: FunctionalComponent<EntriesProps> = ({ entries }) => (
  <div className="mt-8 space-y-8">
    {entries.map(({ name, comment, createdAt }) => (
      <Entry name={name} comment={comment} createdAt={createdAt} key={`${comment}${createdAt}`} />
    ))}
  </div>
);

export default Entries;
