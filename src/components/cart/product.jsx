import React from 'react';
import { AmountButton } from '../../ui/amount-button/amount-button';
import { DeleteButton } from '../../ui/delete-button/delete-button';
import styles from './product.module.css';
import { priceFormat } from '../common/utils';

export const Product = ({ src, id, text, qty, price, decrease, increase, discount, discountedPrice, onDelete }) => {
  return (
    <div className={`${styles.product}`}>
      <img className={styles.img} src={src} alt="фото товара." />
      <p className={styles.text}>{text}</p>
      <div className={styles.amountbox}>
        <AmountButton data-testid={`decrease-${id}`} onClick={decrease}>-</AmountButton>
        <p className={styles.amount} data-testid={`product-amount-${id}`}>{qty}</p>
        <AmountButton data-testid={`increase-${id}`} onClick={increase}>+</AmountButton>
      </div>
      <div className={styles.price}>
        <p className={`${styles.price} ${discount && styles.exPrice}`} data-testid={`price-amount-${id}`}>
          {priceFormat(price * qty)}
        </p>
        {discount && <p className={styles.price} >{priceFormat(discountedPrice)}</p>}
      </div>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
};
