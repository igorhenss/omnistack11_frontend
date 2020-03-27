import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';
import DefaultButton from '../../components/shared/DefaultButton';

import api from '../../services/api';

import './styles.css';

export default function Register() {
  const history = useHistory();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [fu, setFu] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    const data = { city, email, fu, name, whatsapp };

    try {
      const response = await api.post('/ngo/register', data);

      alert(`Your ID: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert(`Could not register.`)
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <LogoImg />

          <h1>Register</h1>
          <p>Register your NGO and let HEROES help you out!</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />Back to Login
          </Link>
        </section>

        <form onSubmit={ handleRegister }>
          <input
            placeholder="Name"
            value={ name }
            onChange={ e => setName(e.target.value) }
          />

          <input
            type="email" placeholder="E-mail"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
          <input
            placeholder="WhatsApp"
            value={ whatsapp }
            onChange={ e => setWhatsapp(e.target.value) }
          />

          <div className="input-group">
            <input
              placeholder="City"
              value={ city }
              onChange={ e => setCity(e.target.value) }
            />
            <input
              placeholder="FU" style={{ width: 80 }}
              value={ fu }
              onChange={ e => setFu(e.target.value) }
            />
          </div>

          <DefaultButton type="submit">
            Register
          </DefaultButton>
        </form>
      </div>
    </div>
  );
}