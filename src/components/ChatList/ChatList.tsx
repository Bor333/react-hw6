import {ListItem} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {FC, useState} from 'react';

import {db} from "src/services/firebase";
import {ref, set, remove} from "firebase/database";
import {nanoid} from "nanoid";



export const ChatList: FC<any> = ({chats}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value) {

            set(ref(db, `user/chats/${value}`), {
                    id: nanoid(),
                    name: value,
            });

            set(ref(db, `user/messages/${value}`), {
                name: value,
            });
        }
    };
    const handleDelete = (chatName: string) => {
        remove(ref(db, `user/chats/${chatName}`));
    };
    return (
        <>
            <ul>
                {chats.map((chat: any) => (
                    <ListItem key={chat.id}>
                        <NavLink
                            to={`/chats/${chat.name}`}
                            style={({isActive}) => ({
                                color: isActive ? 'green' : 'blue',
                            })}
                        >
                            {chat.name}
                        </NavLink>
                        <button onClick={() => handleDelete(chat.name)}>X</button>
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
