import { FunctionComponent } from 'preact';

const Message: FunctionComponent = ({ children }) => (
  <p className="text-sm text-gray-800 mt-4 -mb-6">{children}</p>
);

export default Message;
