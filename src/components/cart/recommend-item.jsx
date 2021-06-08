import React from 'react';
import styles from './recommend-item.module.css';
import { MainButton } from '../../ui/main-button/main-button';
import { priceFormat } from '../common/utils';

export const RecommendItem = ({ src, price, text }) => {
  return (
    <article className={styles.article}>
      <img className={styles.img} src={src} alt="изображение товара." />
      <p className={styles.price}>{priceFormat(price)}</p>
      <p className={styles.text}>{text}</p>
      <MainButton type="button" extraClass={styles.button}>
        Добавить
      </MainButton>
    </article>
  );
};
