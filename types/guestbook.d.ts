export type Entry = {
  _id?: number;
  name: string;
  comment: string;
  email: string;
  createdAt: Date;
  data?: Entries;
};

export type Entries = Entry[];

export type Login = {
  type: 'google' | 'twitter';
  name: 'Google' | 'Twitter';
};
