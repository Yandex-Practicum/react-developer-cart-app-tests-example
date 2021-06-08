import React from 'react';
import styles from './promo-button.module.css';
import closeIcon from '../../images/close.svg';
import { cancelPromo as cancelPromoAction } from '../../services/actions';
import { useDispatch } from 'react-redux';

export const PromoButton = ({ children, extraClass }) => {
  const dispatch = useDispatch();

  const cancelPromo = () => {
    dispatch(cancelPromoAction());
  };
  return (
    <button type="button" className={`${styles.button} ${extraClass}`} onClick={cancelPromo}>
      {children}
      <img className={styles.close} src={closeIcon} alt="кнопка закрытия" />
    </button>
  );
};
