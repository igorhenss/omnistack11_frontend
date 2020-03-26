import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';
import DefaultButton from '../../components/shared/DefaultButton';

import './styles.css';

export default function NewCause() {
  return (
    <div className="new-cause-container">
      <div className="content">
        <section>
          <LogoImg />

          <h1>Create new cause</h1>
          <p>Describe the cause in detail so a HERO can save the day!</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />Back to Profile
          </Link>
        </section>

        <form>
          <input placeholder="Title" />
          <textarea placeholder="Description" />
          <input placeholder="Needed amount (USD)" />

          <DefaultButton type="submit">
            Create cause!
          </DefaultButton>
        </form>
      </div>
    </div>
  );
}