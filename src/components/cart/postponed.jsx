import React from 'react';
import styles from './postponed.module.css';

export const Postponed = () => {
  return (
    <div className={`${styles.postponed}`}>
      <p className={styles.text}>Здесь пусто.</p>
      <p className={styles.text}>
        Вы можете добавить товары в список отложенных, перетащив их карточку из корзины сюда.
      </p>
      <p className={styles.text}>Положить их обратно в корзину можно аналогичным способом.</p>
    </div>
  );
};
