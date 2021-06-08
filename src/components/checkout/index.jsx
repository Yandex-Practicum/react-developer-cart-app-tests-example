import React from 'react';
import styles from './checkout.module.css';
import { CheckoutProduct } from './checkout-product';
import { Modal } from '../checkout/modal';
import { CheckoutAddress } from './checkout-address';
import { useSelector } from 'react-redux';

export const Checkout = ({ extraClass }) => {
  const { items } = useSelector(state => state.cart);
  const { order } = useSelector(state => state.checkout);
  return (
    <section className={`${styles.container} ${extraClass}`}>
      <h3 className={styles.title}>Товары:</h3>
      {items.map((item, index) => {
        return <CheckoutProduct key={index} {...item} />;
      })}
      <CheckoutAddress extraClass={styles.address} />
      {!!order && !!order.id && <Modal number={order.id} />}
    </section>
  );
};
