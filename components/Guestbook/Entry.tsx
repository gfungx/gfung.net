import type { FunctionalComponent } from 'preact';
import type { Entry as EntryProps } from 'types/guestbook';

import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import format from 'date-fns/format';

const Entry: FunctionalComponent<EntryProps> = ({ name, comment, email, createdAt, data }) => {
  const [session] = useSession();
  const router = useRouter();

  const Entry = { name, comment, email, createdAt };

  const onSubmit = async () => {
    await fetch('/api/guestbook/delete', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Entry)
    });

    router.reload();
  };

  return (
    <>
      <div className="flex flex-col space-y-2">
        <div className="prose w-full">{comment}</div>
        <div className="flex items-center space-x-3">
          <p className="text-sm text-gray-500">{name}</p>
          <span className="text-gray-200 dark:text-gray-700">/</span>
          <p className="text-sm text-gray-400">
            {createdAt ? format(new Date(createdAt), "d MMM yyyy 'at' h:mm bb") : null}
          </p>
          {session?.user?.email === email ? (
            <div onClick={onSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer hover:stroke-current text-red-600 hover:scale-125 transform transition duration-200 -mt-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9CA3AF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Entry;
