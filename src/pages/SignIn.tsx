import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {logIn} from "src/services/firebase";
import {CircularProgress} from "@mui/material";

export const SignIn: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await logIn(login, password);
            navigate('/chats');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('error');
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <p>Login:</p>
                <input type="email"
                       onChange={(e) => setLogin(e.target.value)}
                       value={login}
                       required
                />
                <p>Password:</p>
                <input type="text"
                       onChange={(e) => setPassword(e.target.value)} value={password}
                       required
                />
                <br/>
                <br/>
                <button>Login</button>
            </form>
            {loading && <CircularProgress/>}
            {error && <p style={{color: "red"}}>{error}</p>}
        </>
    );
};