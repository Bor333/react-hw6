import { FC } from 'react';
import { Message } from 'src/types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<any> = ({ messages }) => {
  return (
    <ul>
      {messages.map((message: any, idx: number) => (
        <li key={idx} data-testid="li">
          {message.author}: {message.value}
        </li>
      ))}
    </ul>
  );
};
