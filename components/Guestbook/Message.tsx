import type { FunctionComponent } from 'preact';

const Message: FunctionComponent = ({ children }) => (
  <p className="text-sm mt-4 -mb-6">{children}</p>
);

export default Message;
