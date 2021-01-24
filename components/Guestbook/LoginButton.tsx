import type { FunctionalComponent } from 'preact';
import { signIn } from 'next-auth/client';

import type { LoginButton as LoginButtonProps } from 'types/guestbook';

const LoginButton: FunctionalComponent<LoginButtonProps> = ({ type, name }) => (
  <button
    onClick={() => signIn(type)}
    className="flex items-center justify-center cursor-pointer font-bold bg-white rounded px-4 py-2 mt-2 mr-2"
  >
    Continue with {name}
  </button>
);

export default LoginButton;
