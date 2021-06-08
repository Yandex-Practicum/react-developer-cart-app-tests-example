import React from 'react';
import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ extraClass }) => {
  return <div className={`${styles.overlay} ${extraClass}`} />;
};
