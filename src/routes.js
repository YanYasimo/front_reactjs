import React from 'react';
import { BrowserRouter as Router, Route, Routes as Rout } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
    return (
        <Router>
            <Rout>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
            </Rout>
        </Router>
    );
}