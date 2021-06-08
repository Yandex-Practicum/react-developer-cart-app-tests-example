import React from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../../ui/modal-overlay/modal-overlay';
import styles from './modal.module.css';
import { priceFormat, totalPriceSelector } from '../common/utils';
import { useSelector } from 'react-redux';

const modalRoot = document.getElementById('react-modals');

export const Modal = ({ number, extraClass }) => {
  const totalPrice = useSelector(totalPriceSelector);

  return ReactDOM.createPortal(
    <section className={`${styles.container} ${extraClass}`}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Спасибо за заказ!</h2>
        <p className={styles.text}>Номер заказа:</p>
        <p className={styles.number}>{number}</p>
        <p className={styles.text}>Итоговая сумма:</p>
        <p className={styles.price}>{priceFormat(totalPrice)}</p>
      </div>
      <ModalOverlay />
    </section>,
    modalRoot
  );
};
