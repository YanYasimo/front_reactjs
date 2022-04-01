import React, {useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const history = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        try{
            if (password !== confirmPassword) {
                throw new Error('Senhas não conferem');
            }
            const response = await api.post('/users', { name, email, password });
            const { id } = response.data;

            alert('User registered sucessfuly!');

            history('/');
        } catch (err) {
            if (err.response) {
                alert('Fail to register, try again.\n' + err.response.data.error);
            } else {
                alert('Fail to register, try again.');
            }
        }
    };

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro na plataforma Timer</h1>
                    <p>Faça seu cadastro, entre na plataforma e comece a mensurar sua produtividade.</p>

                    <Link className="linked" to="/">
                        <FiChevronsLeft size={16} color="#E02041" />
                        Realizar Cadastro
                    </Link>
                </section>

                 <form onSubmit={handleRegister} >
                    <input 
                        placeholder="Nome" 
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Confirme a Senha" 
                        value={confirmPassword}
                        onChange={e=> setConfirmPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                 </form>
            </div>
        </div>
    );
}