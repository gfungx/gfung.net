import type { FunctionalComponent } from 'preact';
import type { Entries, Entry } from 'types/guestbook';

import { useEffect, useState } from 'preact/hooks';
import { useSession } from 'next-auth/client';
import { signOut } from 'next-auth/client';
import { useRouter, NextRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Filter from 'bad-words';
import { mutate } from 'swr';

type SignProps = {
  initEntries: Entries;
};

type Inputs = {
  comment: string;
};

const filter = new Filter();

const handleSignOut = async (router: NextRouter) => {
  await signOut();
  router.reload();
};

const Sign: FunctionalComponent<SignProps> = ({ initEntries }) => {
  let message: JSX.Element | null = null;
  const [session] = useSession();
  const router = useRouter();
  const [entries, setEntries] = useState(initEntries);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<Inputs>();
  const [isPosted, setIsPosted] = useState(false);

  const onSubmit = async (data: Inputs) => {
    const payload: Entry = {
      name: filter.clean(session!.user!.name!),
      comment: filter.clean(data.comment),
      email: session!.user!.email!,
      createdAt: new Date()
    };

    const res = await fetch('/api/guestbook/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const newData = await res.json();
    console.log(newData);

    setEntries([payload, ...entries]);
    mutate('/api/guestbook/entries', [payload, ...entries], true);
    setIsPosted(true);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  if (errors.comment?.message) {
    message = <p className="message">{errors.comment?.message}</p>;
  } else if (isPosted) {
    message = <p className="message">🎉 Hooray! Thanks for signing! 🎉</p>;
  } else if (session) {
    message = (
      <p className="message">
        You are currently signed in as {session!.user!.name}
        {session!.user!.email ? ` (${session!.user!.email})` : ''}.{' '}
        <span onClick={() => handleSignOut(router)} className="underline cursor-pointer">
          Sign out
        </span>
      </p>
    );
  }
  return (
    <>
      <h5 className="guestbook-header">Thanks for logging in, you're all set!</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="relative my-4">
        <input
          name="comment"
          type="text"
          aria-label="Your message"
          placeholder="Your message..."
          className="input input-effects w-full pl-4 pr-32"
          ref={register({
            required: `You want to say something, don't you?`,
            validate: {
              profane: value => !filter.isProfane(value) || 'Woah, keep it clean please.'
            }
          })}
        />
        <button
          type="submit"
          className="flex items-center justify-center absolute font-bold bg-gray-100 dark:bg-gray-900 outline-none transition hover:bg-gray-200 dark:hover:bg-gray-800 duration-200 rounded right-1 top-1 h-8 px-4 w-28"
        >
          Sign
        </button>
        {message}
      </form>
    </>
  );
};

export default Sign;
