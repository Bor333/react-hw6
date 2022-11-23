import {FC} from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {ChatList} from 'src/components/ChatList';
import {Form} from 'src/components/Form';
import {MessageList} from 'src/components/MessageList';
import style from './ChatPage.module.scss';
import {WithClasses} from 'src/HOC/WithClasses';
import { useSelector} from "react-redux";
import {selectMessages} from "store/messages/selectors";


export const ChatPage: FC = () => {
    const {chatId} = useParams();
    const MessageListWithClass = WithClasses(MessageList);
    const messages = useSelector(selectMessages);

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>;
    }

    return (
        <>
            <ChatList/>
            {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
            <MessageListWithClass
                messages={chatId ? messages[chatId] : []}
                classes={style.border}
            />
            <Form/>
        </>
    );
};
