import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';

import './styles.css';

export default function Register(){
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

                 <form>
                    <input placeholder="Nome" />
                    <input type="email" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirme a Senha" />

                    <button className="button">Cadastrar</button>
                 </form>
            </div>
        </div>
    );
}