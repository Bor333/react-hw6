import React, {FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {signUp} from "src/services/firebase";
import {CircularProgress} from "@mui/material";

export const SignUp: FC = () => {
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
            await signUp(login, password);
            navigate('/signin');
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
            <h2>Sign Up</h2>
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
                       pattern="[a-zA-Z0-9\._-]{6,}"
                       onInvalid={(e) =>
                           (e.target as HTMLInputElement).setCustomValidity('min length to be 6')}
                />
                <br/>
                <br/>
                <button>Create user</button>
            </form>
            {loading && <CircularProgress/>}
            {error && <p style={{color: "red"}}>{error}</p>}
        </>

    );
};