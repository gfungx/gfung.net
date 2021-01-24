export type Entry = {
  _id?: number;
  name: string;
  comment: string;
  createdAt: Date;
};

export type Entries = Entry[];

export type Login = {
  type: 'github' | 'twitter';
  name: 'Github' | 'Twitter';
};
