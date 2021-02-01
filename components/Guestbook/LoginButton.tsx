import type { FunctionalComponent } from 'preact';
import type { Login as LoginButtonProps } from 'types/guestbook';

import { signIn } from 'next-auth/client';

const LoginButton: FunctionalComponent<LoginButtonProps> = ({ type, name }) => (
  <button
    onClick={() => signIn(type)}
    className="flex items-center justify-center cursor-pointer font-bold bg-white dark:bg-gray-900 outline-none transition hover:bg-gray-50 duration-200 rounded px-4 py-2 mt-2 mr-2"
  >
    Continue with {name}
  </button>
);

export default LoginButton;
