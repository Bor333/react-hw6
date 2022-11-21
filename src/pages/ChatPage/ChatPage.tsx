import { FC, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { AUTHOR} from 'src/types';
import style from './ChatPage.module.scss';

import { WithClasses } from './../../HOC/WithClasses';
import {useSelector} from "react-redux";
import {StoreState} from 'src/store'

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);
  const messages = useSelector((state: StoreState) => state.messages);

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     messages[chatId]?.length > 0 &&
  //     messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
  //   ) {
  //     const timeout = setTimeout(() => {
  //       onAddMessage(chatId, {
  //         author: AUTHOR.BOT,
  //         value: 'Im BOT',
  //       });
  //     }, 1500);
  //
  //     return () => clearTimeout(timeout);
  //   }
  // }, [chatId, messages, onAddMessage]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList />
      {/* <MessageList messages={chatId ? messages[chatId] : []} /> */}
      <MessageListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
