import {FC} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {ChatList} from 'src/components/ChatList';
import {Form} from 'src/components/Form';
import {MessageList} from 'src/components/MessageList';

export const ChatPage: FC<any>= ({chats, messages}) => {
    const {chatId} = useParams();

    console.log((chatId && messages[chatId].messages || {}))

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>;
    }


    const prepareMessages =
        [...Object.values((chatId && messages[chatId].messages) || {})];

    return (
        <>
            <ChatList chats={chats}/>
             <MessageList messages={prepareMessages} />
            <Form/>
        </>
    );
};
