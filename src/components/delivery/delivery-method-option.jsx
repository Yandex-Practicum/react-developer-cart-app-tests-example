import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_DELIVERY_METHOD } from '../../services/actions/delivery';
import { priceFormat } from '../common/utils';
import styles from './delivery-method-option.module.css';

export const DeliveryMethodOption = ({ thumb, id, text, duration, price, checked }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: SET_DELIVERY_METHOD, id });
  };
  return (
    <li className={`${styles.option} ${checked && styles['option-checked']} `}>
      <input
        name="method"
        type="radio"
        id={id}
        className={styles.input}
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={id}>
        <div className={styles.leftbox}>
          <img className={styles.img} src={thumb} alt="изображение способа доставки." />
          <p className={styles.text}>{text}</p>
        </div>
      </label>
      <p className={styles.duration}>{duration} дней</p>
      <p className={styles.price}>{priceFormat(price)}</p>
    </li>
  );
};
