export type Entry = {
  _id?: number;
  name: string;
  comment: string;
  createdAt: Date;
};

export type Entries = Entry[];

export type LoginButton = {
  type: 'google' | 'github' | 'twitter';
  name: 'Google' | 'Github' | 'Twitter';
};
