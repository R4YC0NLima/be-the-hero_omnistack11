import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './style.css';
import logoImg from '../../assets/logo.svg';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button>
                    <FiPower size="18" color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            
            <ul>
                <li>
                    <strong>CASO1:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste 1</p>

                    <strong>VALOR 1</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size="20"  color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO2:</strong>
                    <p>caso teste 2</p>

                    <strong>DESCRIÇÃO2:</strong>
                    <p>Descrição teste 2</p>

                    <strong>VALOR 2</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size="20"  color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO 3:</strong>
                    <p>caso teste 3</p>

                    <strong>DESCRIÇÃO3: </strong>
                    <p>Descrição teste 3</p>

                    <strong>VALOR 3</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size="20"  color="#a8a8b3"/>
                    </button>
                </li>
                <li>
                    <strong>CASO 4:</strong>
                    <p>caso teste 4</p>

                    <strong>DESCRIÇÃO4: </strong>
                    <p>Descrição teste 4</p>

                    <strong>VALOR 4</strong>
                    <p>R$120,00</p>
                    <button type="button">
                        <FiTrash2 size="20"  color="#a8a8b3"/>
                    </button>
                </li>
                
            </ul>
        </div>
    );
}