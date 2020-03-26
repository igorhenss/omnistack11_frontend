import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import LogoImg from '../../components/shared/LogoImg';
import DefaultButton from '../../components/shared/DefaultButton';

import api from '../../services/api';

import './styles.css';

export default function NewCause() {
  const history = useHistory();

  const ngoId = localStorage.getItem('ngoId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleCauseCreation(e) {
    e.preventDefault();

    const data = { title, description, value };

    try {
      await api.post('/cause/new', data, {
        headers: {
          Authorization: ngoId,
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Could not create cause.')
    }
  }

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

        <form onSubmit={ handleCauseCreation }>
          <input
            placeholder="Title"
            value={ title }
            onChange={ e => setTitle(e.target.value) }
          />
          <textarea
            placeholder="Description"
            value={ description }
            onChange={ e => setDescription(e.target.value) }
          />
          <input
            placeholder="Needed amount (USD)"
            value={ value }
            onChange={ e => setValue(e.target.value) }
          />

          <DefaultButton type="submit">
            Create cause!
          </DefaultButton>
        </form>
      </div>
    </div>
  );
}