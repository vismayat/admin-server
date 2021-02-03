import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const MyLoginPage = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <ThemeProvider theme={createMuiTheme(defaultTheme)}>
            <form onSubmit={submit}>
                <label name="email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={email}

                    onChange={e => setEmail(e.target.value)}
                    required /><br />
                <label name="password">Password</label>
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required /><br />
                <button type="submit" >Login</button>
            </form>
            <Notification />
        </ThemeProvider>
    );
};

export default MyLoginPage;