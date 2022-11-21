import {Reducer} from 'redux';
import {AUTHOR, Messages} from "src/types";
import {ADD_CHAT, ADD_MESSAGE, DELETE_CHAT} from "store/messages/actions";
import {MessagesActions} from "store/messages/types";

const initialState: Messages = {
    first: [{author: AUTHOR.USER, value: 'hello, world'}],
    second: [{author: AUTHOR.BOT, value: 'hello, im bot'}],
};

export const messagesReducer: Reducer<Messages, MessagesActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case ADD_CHAT: {
            return {
                ...state,
                [action.chatName]: [],
            };
        }

        case ADD_MESSAGE: {
            return {
                ...state,
                [action.chatName]: [...state[action.chatName], action.newMessage]
            };
        }

        case DELETE_CHAT: {
            const messages = {...state};
            console.log(messages);
            delete messages[action.chatName]
            return messages;
        }

        default:
            return state;
    }
};
