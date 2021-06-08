import React from 'react';
import styles from './input.module.css';

export const Input = ({
  type,
  placeholder,
  inputWithBtn,
  extraClass,
  inputRef,
  value,
  onChange,
  ...props
}) => {
  const className = `${styles.input} ${extraClass} ${inputWithBtn ? styles.input_withBtn : ''}`;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      ref={inputRef}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
