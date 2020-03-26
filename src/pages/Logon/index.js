import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';
import DefaultButton from '../../components/shared/DefaultButton';

import heroesImg from '../../assets/heroes.png';

import './styles.css';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <LogoImg />

        <form>
          <h1>Be The NGO</h1>
          
          <input placeholder="Type your ID"/>
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