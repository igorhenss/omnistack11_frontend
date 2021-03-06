import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';
import DefaultButton from '../../components/shared/DefaultButton';

import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

import './styles.css';

export default function Logon() {
  const history = useHistory();
  
  const [id, setId] = useState('');

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      localStorage.setItem('ngoId', id);
      localStorage.setItem('ngoName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Could not login.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <LogoImg />

        <form onSubmit={ handleLogin }>
          <h1>Be The NGO</h1>
          
          <input
            placeholder="Type your ID"
            value={ id }
            onChange={ e => setId(e.target.value) }
          />
          <DefaultButton type="submit">
            Login
          </DefaultButton>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/> Register
          </Link>
        </form>
      </section>

      <img src={ heroesImg } alt="Heroes"/>
    </div>
  );
}