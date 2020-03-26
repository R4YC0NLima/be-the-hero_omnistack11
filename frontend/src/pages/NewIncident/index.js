import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './style.css';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um heroi para resolver isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft color="#E02041" />
            Voltar para a home
          </Link>
        </section>
        <form action="">
          <input placeholder="Titulo do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em Reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
