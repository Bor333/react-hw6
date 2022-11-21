import {ListItem} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from "store/messages/actions";
import {StoreState} from "src/store";
import {nanoid} from "nanoid";


export const ChatList: FC = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const messages = useSelector((state: StoreState) => state.messages)

    const chats = Object.keys(messages).map(chatName => ({
        id: nanoid(),
        name: chatName
    }));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (value) {
            dispatch(addChat(value));
            setValue('');
        }
    };

    return (
        <>
            <ul>
                {chats.map((chat) => (
                    <ListItem key={chat.id}>
                        <NavLink
                            to={`/chats/${chat.name}`}
                            style={({isActive}) => ({
                                color: isActive ? 'green' : 'blue',
                            })}
                        >
                            {chat.name}
                        </NavLink>
                        <button onClick={() => dispatch(deleteChat(chat.name))}>X</button>
                    </ListItem>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <button>create chat</button>
            </form>
        </>
    );
};
