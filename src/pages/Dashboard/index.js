import React, {useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header />
        </div>
    );
};