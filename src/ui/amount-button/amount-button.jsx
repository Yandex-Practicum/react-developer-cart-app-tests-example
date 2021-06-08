import React from 'react';
import styles from './amount-button.module.css';

export const AmountButton = ({ children, extraClass, onClick, ...restProps }) => {
  return (
    <button type="button" onClick={onClick} className={`${styles.button} ${extraClass}`} {...restProps}>
      {children}
    </button>
  );
};
