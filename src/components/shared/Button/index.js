import React from 'react';

import './styles.css';

export default function MainButton({children, type}) {
  return (
    <button className="main-button" type={type}> { children } </button>
  );
}