import React from 'react';
import { Link } from 'react-router-dom';
import { FiKey } from 'react-icons/fi';

import './styles.css';

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Fazer Login</h1>

                    <input placeholder="Seu E-mail" />
                    <input type="password" placeholder="Sua Senha" />
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