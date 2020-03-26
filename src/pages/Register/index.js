import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';
import DefaultButton from '../../components/shared/DefaultButton';

import './styles.css';

export default function Register() {
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

        <form>
          <input placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="FU" style={{ width: 80 }} />
          </div>

          <DefaultButton type="submit">
            Register
          </DefaultButton>
        </form>
      </div>
    </div>
  );
}