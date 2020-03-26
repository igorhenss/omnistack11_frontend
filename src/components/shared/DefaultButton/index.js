import React from 'react';

export default function MainButton({children, type}) {
  return (
    <button className="main-button" type={type}> { children } </button>
  );
}