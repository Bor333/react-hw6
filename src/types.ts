export interface Message {
  author: AUTHOR;
  value: string;
}

export interface MessageWithId extends Message{
  id: string;
}


export type Messages = Record<string, Message[]>;
export type MessagesWithId = Record<string, MessageWithId[]>;

export enum AUTHOR {
  USER = 'USER',
  BOT = 'BOT',
}

export interface Chat {
  id: string;
  name: string;
}
