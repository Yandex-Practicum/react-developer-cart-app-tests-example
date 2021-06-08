import React from 'react';
import styles from './title.module.css';

export const Title = ({ text, currentStep, allSteps, amount, extraClass }) => {
  return (
    <header className={`${styles.header} ${extraClass}`}>
      <h2 className={styles.title}>{text}</h2>
      {currentStep && <p className={styles.steps}>{`Шаг ${currentStep} из ${allSteps}`}</p>}
      {amount && <p className={styles.steps}>{`${amount} товара`}</p>}
    </header>
  );
};
