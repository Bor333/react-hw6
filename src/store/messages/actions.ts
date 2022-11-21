import {AddChat, AddMessage, DeleteChat} from "store/messages/types";
import {Message} from "src/types";

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

export const addChat = (chatName: string): AddChat  => ({
    type: ADD_CHAT,
    chatName,
})

export const addMessage = (
    chatName: string,
    newMessage: Message,
    ): AddMessage  => ({
    type: ADD_MESSAGE,
    chatName,
    newMessage
})

export const deleteChat = (chatName: string): DeleteChat  => ({
    type: DELETE_CHAT,
    chatName,
})