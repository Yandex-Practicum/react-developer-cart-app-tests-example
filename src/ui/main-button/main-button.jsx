import React from 'react';
import styles from './main-button.module.css';

export const MainButton = ({ type, children, extraClass, inputButton, secondary, onClick }) => {
  const className = `${styles.button} ${extraClass} ${inputButton ? styles.input : ''} ${
    secondary ? styles.secondary : ''
  }`;
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};
