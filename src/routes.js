import React from 'react';
import { BrowserRouter as Router, 
    Route, 
    Routes as Rout, 
    Navigate,
    useLocation } from 'react-router-dom';

import useAuth from './services/useAuth';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function RequireAuth({ children }) {
    const { authed } = useAuth();
    const location = useLocation();
  
    return authed === true ? (
      children
    ) : (
      <Navigate to="/" replace state={{ path: location.pathname }} />
    );
};

export default function Routes() {
    return (
        <Router>
            <Rout>
                <Route exact path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }/>
            </Rout>
        </Router>
    );
}