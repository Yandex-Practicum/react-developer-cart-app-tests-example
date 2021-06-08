import React, { useMemo } from 'react';
import styles from './app.module.css';
import { Title } from '../../ui/title/title';
import { Cart } from '../cart';
import { Delivery } from '../delivery';
import { Checkout } from '../checkout';
import { Recommend } from '../cart/recommend';
import { TotalPrice } from '../common/total-price';
import { useSelector } from 'react-redux';

const title = { cart: 'Корзина', delivery: 'Доставка', checkout: 'Подтверждение заказа' };

function App() {
  const step = useSelector(state => state.step);

  const content = useMemo(
    () => {
      switch (step) {
        case 'cart': {
          return <Cart />;
        }
        case 'delivery': {
          return <Delivery />;
        }
        case 'checkout': {
          return <Checkout />;
        }
        default: {
          return <Cart />;
        }
      }
    },
    [step]
  );
  return (
    <div className={styles.app}>
      <Title
        text={title[step]}
        currentStep={Object.keys(title).indexOf(step) + 1}
        allSteps={Object.keys(title).length}
      />
      {content}
      <TotalPrice step={step} />
      {step === 'cart' && <Recommend extraClass={styles.recommend} />}
    </div>
  );
}

export default App;
