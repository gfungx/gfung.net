export type Entry = {
  _id?: number;
  name: string;
  comment: string;
  createdAt: Date;
};

export type Entries = Entry[];

export type Login = {
  type: 'google' | 'twitter';
  name: 'Google' | 'Twitter';
};
