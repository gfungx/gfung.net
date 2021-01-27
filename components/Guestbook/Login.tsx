import type { FunctionalComponent } from 'preact';
import type { Login as LoginType } from 'types/guestbook';

import LoginButton from 'components/Guestbook/LoginButton';

const loginButtons: LoginType[] = [
  { type: 'twitter', name: 'Twitter' },
  { type: 'github', name: 'Github' }
];

const Login: FunctionalComponent = () => (
  <>
    <h5 className="guestbook-header">To sign the guestbook, login first</h5>
    <div className="flex">
      {loginButtons.map(({ type, name }) => (
        <LoginButton type={type} name={name} key={type} />
      ))}
    </div>
    <p className="text-sm mt-2 -mb-2">
      To fight against spam and bots, logging in helps tells us that you're really a human!
    </p>
  </>
);

export default Login;
