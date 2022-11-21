export interface Message {
  author: AUTHOR;
  value: string;
}

export type Messages = Record<string, Message[]>;

export enum AUTHOR {
  USER = 'USER',
  BOT = 'BOT',
}

export interface Chat {
  id: string;
  name: string;
}
