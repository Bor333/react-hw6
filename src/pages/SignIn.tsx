import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {auth} from "store/profile/slice";
import {useNavigate} from "react-router-dom";

export const SignIn:FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

        if(login === 'gb' && password === 'gb') {
            dispatch(auth(true));
            navigate(-1)
        } else {
            setError(true);
        }
    };
    return (
        <>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <p>Login:</p>
                <input type="text"
                       onChange={(e) => setLogin(e.target.value)} value={login} />
                <p>Password:</p>
                <input type="text"
                       onChange={(e) => setPassword(e.target.value)} value={password} />
                <br/>
                <br/>
                <button>Login</button>
            </form>
            {error && <p style={{color: "red"}}>Логин или пароль не верны</p>}
        </>
    );
};