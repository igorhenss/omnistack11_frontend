import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const history = useHistory();

  const ngoId = localStorage.getItem('ngoId');
  const ngoName = localStorage.getItem('ngoName');

  const [causes, setCauses] = useState([]);

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: ngoId,
      }
    }).then(response => {
      setCauses(response.data);
    })
  }, [ngoId]);

  async function handleCauseDeletion(id) {
    try {
      await api.delete(`/cause/delete/${id}`, {
        headers: {
          Authorization: ngoId,
        }
      });

      setCauses(causes.filter(cause => cause.id !== id));
    } catch (error) {
      alert('Could not delete cause.');
    }
  }

  async function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <LogoImg />
        <span>Welcome, { ngoName }</span>

        <Link className="main-button" to="/cause/new"> Add new cause </Link>
        <button type="button" onClick={ handleLogout }>
          <FiPower size={18} color="#E02041"/>
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        { causes.map(cause => (
          <li key={ cause.id }>
            <strong>CASO:</strong>
            <p>{ cause.title }</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{ cause.description }</p>

            <strong>VALOR:</strong>
            <p>{ Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cause.value) }</p>

            <button type="button" onClick={ () => handleCauseDeletion(cause.id) }>
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}