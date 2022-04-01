import React, {useState} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';


import api from '../../services/api';
import useAuth from '../../services/useAuth';

import './styles.css';

export default function Login() {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const { login } = useAuth();
    const { state } = useLocation();

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('/sessions', {email, password});

            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', response.data.name);

            
            login().then(() => {
                navigate(state?.path || "/dashboard");
            });

            // navigate('/dashboard');
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    };


    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Fazer Login</h1>

                    <input 
                        placeholder="Seu E-mail"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Sua Senha"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Acessar</button>

                    <Link className="linked" to="/register">
                        <FiKey size={16} color="#E02041" />
                        Realizar Cadastro
                    </Link>
                </form>
            </section>
        </div>
    );
    }