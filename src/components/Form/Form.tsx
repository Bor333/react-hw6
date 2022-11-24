import {FC, useState, memo, useContext} from 'react';
import TextField from '@mui/material/TextField';
import {useParams} from 'react-router-dom';

import {Button} from './components/Button';
import {AUTHOR} from 'src/types';
import {ThemeContext} from 'src/utils/ThemeContext';
import {useDispatch} from "react-redux";
import { addMessageWithReply} from "store/messages/slice";
import {Wrapper} from "components/Form/styled";
import {ThunkDispatch} from "redux-thunk";
import {StoreState} from "src/store";
import {AddMessage} from "store/messages/slice";


export const Form: FC = memo(() => {
    const [value, setValue] = useState('');
    const {chatId} = useParams();
    const {theme, toggleTheme} = useContext(ThemeContext);
    const dispatch = useDispatch<ThunkDispatch<StoreState, void, any>>();


    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (chatId) {
            dispatch(addMessageWithReply({
                    chatName: chatId,
                    message: {
                        author: AUTHOR.USER,
                        value,
                    }
                })
            );
        }
        setValue('');
    };

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <TextField
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    inputProps={{'data-testid': 'input'}}
                />
                <Button
                    disabled={!value}
                    render={(label: string) => <div>{label}</div>}
                >
                    send
                </Button>
            </form>

            <p>theme: {theme === 'light' ? '🌞' : '🌙'}</p>
            <button onClick={toggleTheme}>toggle theme</button>
        </Wrapper>
    );
});
