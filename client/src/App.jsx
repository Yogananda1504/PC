import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';
import About from './components/About/About';
import Login from './components/LS/Login/Login';
import 'boxicons'

const socket = io.connect('http://localhost:5000');

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<About socket={socket} />} />
                <Route path="/Login" element={<Login socket={socket} />} />
            </Routes>
        </Router>
    );
}

export default App;
