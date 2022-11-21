import {ADD_CHAT, ADD_MESSAGE, DELETE_CHAT} from "store/messages/actions";
import {Chat, Message} from "src/types";

export type MessagesActions = AddChat | AddMessage | DeleteChat;

export interface AddChat {
    type: typeof ADD_CHAT;
    chatName: string;
}

export interface AddMessage {
    type: typeof ADD_MESSAGE;
    chatName: string,
    newMessage: Message
}

export interface DeleteChat {
    type: typeof DELETE_CHAT;
    chatName: string,
}