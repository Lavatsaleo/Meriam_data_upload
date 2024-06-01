// src/components/Auth/Login.js
import React, { useState } from 'react';
import API from '../../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/auth/login', { email, password });
            localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN_NAME, response.data.token);
            alert('Login successful');
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
