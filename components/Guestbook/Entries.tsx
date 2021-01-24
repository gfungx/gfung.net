import type { FunctionalComponent } from 'preact';

import type { Entries as EntriesType } from 'types/guestbook';
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
