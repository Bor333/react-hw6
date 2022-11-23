import {AddChat, AddMessage, DeleteChat} from "store/messages/types";
import {AUTHOR, Message} from "src/types";
import {Dispatch} from "redux";

export const ADD_CHAT = 'MESSAGES::ADD_CHAT';
export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_CHAT = 'MESSAGES::DELETE_CHAT';

export const addChat = (chatName: string): AddChat => ({
    type: ADD_CHAT,
    chatName,
});

export const addMessage = (
    chatName: string,
    newMessage: Message,
): AddMessage => ({
    type: ADD_MESSAGE,
    chatName,
    newMessage
});

export const deleteChat = (chatName: string): DeleteChat => ({
    type: DELETE_CHAT,
    chatName,
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply =
    (chatName: string, newMessage: Message,) => (dispatch: Dispatch) => {
        dispatch(addMessage(chatName, newMessage));

        if (
            newMessage.author !== AUTHOR.BOT) {
            if (timeout) {
                clearTimeout(timeout)
            }

            timeout = setTimeout(() => {
                dispatch(addMessage(chatName, {
                        author: AUTHOR.BOT,
                        value: 'Im BOT',
                    })
                );
            }, 1500);
        }
    };
