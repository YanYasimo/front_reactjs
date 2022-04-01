import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import { FiLogOut } from "react-icons/fi";

import './styles.css';

import useAuth from '../../services/useAuth';

export default function Header() {
    const { logout } = useAuth();
    const { state } = useLocation();

    const userName = localStorage.getItem('userName');

    const navigate = useNavigate();

    async function handleLogout(e) {
        e.preventDefault();

        localStorage.clear();
        logout().then(() => {
            navigate(state?.path || "/");
        });
    };

    return (
        <div className="header-container">
            <div className="content">
                <h1>Welcome {userName}</h1>
                <button className="logout" onClick={handleLogout} >
                    Logout
                    <FiLogOut size={16} color="#E02041" />
                </button>
            </div>
        </div>
    );
};