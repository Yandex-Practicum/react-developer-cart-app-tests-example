import styles from './inputs-box.module.css';
import { Input } from '../../ui/input/input';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DELIVERY_FORM_VALUE } from '../../services/actions/delivery';

export const InputsBox = () => {
  const { deliveryForm } = useSelector(state => state.delivery);

  const dispatch = useDispatch();

  const onChange = e => {
    dispatch({ type: SET_DELIVERY_FORM_VALUE, field: e.target.name, value: e.target.value });
  };
  return (
    <div className={`${styles.container}`}>
      <ul className={styles.row}>
        <li className={`${styles.input} ${styles.inputFlex}`}>
          <div className={styles.input}>
            <label className={styles.label} htmlFor="unitNumber">
              Номер квартиры/офиса
            </label>
            <Input
              onChange={onChange}
              name={'unitNumber'}
              value={deliveryForm.unitNumber}
              extraClass={styles.input}
              type="text"
              id="unitNumber"
            />
          </div>
          <div className={styles.input}>
            <label className={styles.label} htmlFor="intercom">
              Домофон
            </label>
            <Input
              onChange={onChange}
              name={'intercom'}
              value={deliveryForm.intercom}
              extraClass={styles.input}
              type="text"
              id="intercom"
            />
          </div>
        </li>
        <li className={`${styles.input} ${styles.floor}`}>
          <label className={styles.label} htmlFor="floor">
            Этаж
          </label>
          <Input
            onChange={onChange}
            name={'floor'}
            value={deliveryForm.floor}
            extraClass={styles.input}
            type="text"
            id="floor"
          />
        </li>
      </ul>
      <ul className={styles.row}>
        <li className={styles.input}>
          <label className={styles.label} htmlFor="name">
            ФИО получателя
          </label>
          <Input
            onChange={onChange}
            name={'name'}
            value={deliveryForm.name}
            type="text"
            extraClass={styles.input}
            id="name"
            placeholder="Введите ФИО"
          />
        </li>
        <li className={styles.input}>
          <label className={styles.label} htmlFor="phone">
            Телефон
          </label>
          <Input
            onChange={onChange}
            name={'phone'}
            value={deliveryForm.phone}
            extraClass={styles.input}
            type="tel"
            id="phone"
            placeholder="+7"
          />
        </li>
      </ul>
    </div>
  );
};
