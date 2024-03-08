import React, { useState } from 'react';
import './Login.css';
import Nav from '../../About/Nav';

export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Emit login event with name and password
        socket.emit('Login', { name: name, password: password });
    };

    return (
        <form onSubmit={handleLogin}>
            <Nav></Nav>
            <div className="ocont">
                <div className="Container">
                    <div className="username">
                        Username :
                        <input
                            type="text"
                            name="Username"
                            id="Username"
                            placeholder="Enter your username"
                            value={name}
                            onChange={handleName}
                        />
                    </div>
                    <div className="Password">
                        Password :
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            placeholder="Enter password"
                            value={password}
                            onChange={handlePassword}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}
