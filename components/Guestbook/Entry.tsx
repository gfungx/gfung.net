import type { FunctionalComponent } from 'preact';
import type { Entry as EntryProps } from 'types/guestbook';

import format from 'date-fns/format';

const Entry: FunctionalComponent<EntryProps> = ({ name, comment, createdAt }) => (
  <div className="flex flex-col space-y-2">
    <div className="prose w-full">{comment}</div>
    <div className="flex items-center space-x-3">
      <p className="text-sm text-gray-500">{name}</p>
      <span className="text-gray-200">/</span>
      <p className="text-sm text-gray-400">
        {format(new Date(createdAt), "d MMM yyyy 'at' h:mm bb")}
      </p>
    </div>
  </div>
);

export default Entry;
