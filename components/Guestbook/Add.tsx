import type { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useSession, signOut } from 'next-auth/client';
import { useRouter, NextRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Filter from 'bad-words';
import { mutate } from 'swr';

import type { LoginButton as LoginButtonType, Entries, Entry } from 'types/guestbook';
import LoginButton from 'components/Guestbook/LoginButton';
import Message from 'components/Guestbook/Message';

type AddProps = {
  initEntries: Entries;
};

type Inputs = {
  comment: string;
};

const loginButtons: LoginButtonType[] = [
  { type: 'twitter', name: 'Twitter' },
  { type: 'github', name: 'Github' }
];

const filter = new Filter();

const handleSignOut = async (router: NextRouter) => {
  await signOut();
  router.reload();
};

const Add: FunctionalComponent<AddProps> = ({ initEntries }) => {
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
      name: filter.clean(session?.user.name!),
      comment: filter.clean(data.comment),
      createdAt: new Date()
    };

    await fetch('/api/guestbook/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

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
    message = <Message>{errors.comment?.message}</Message>;
  } else if (isPosted) {
    message = <Message>🎉 Hooray! Thanks for signing! 🎉</Message>;
  } else if (session) {
    message = (
      <Message>
        You are currently signed in as {session.user.name}
        {session.user.email ? ` (${session.user.email})` : ''}.{' '}
        <span onClick={() => handleSignOut(router)} className="underline cursor-pointer">
          Sign out
        </span>
      </Message>
    );
  }

  return (
    <div className="w-full border bg-blue-50 border-blue-200 rounded p-6 mt-4">
      {session ? (
        <>
          <h5 className="text-lg sm:text-xl font-bold text-gray-900">
            Thanks for logging in, you're all set!
          </h5>
          <form onSubmit={handleSubmit(onSubmit)} className="relative my-4">
            <input
              name="comment"
              aria-label="Your message"
              placeholder="Your message..."
              className="block w-full border-gray-300 rounded-md bg-white pl-4 pr-32 py-2 mt-1"
              ref={register({
                required: `You want to say something, don't you?`,
                validate: {
                  profane: value => !filter.isProfane(value) || 'Woah, keep it clean please.'
                }
              })}
            />
            <button
              type="submit"
              className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 rounded w-28"
            >
              Sign
            </button>
            {message}
          </form>
        </>
      ) : (
        <>
          <h5 className="text-lg sm:text-xl font-bold text-gray-900">
            To sign the guestbook, login first
          </h5>
          <div className="flex">
            {loginButtons.map(({ type, name }) => (
              <LoginButton type={type} name={name} key={type} />
            ))}
          </div>
          <p className="text-sm text-gray-800 mt-2 -mb-2">
            To fight against spam and bots, logging in helps tells us that you're really a human!
          </p>
        </>
      )}
    </div>
  );
};

export default Add;
