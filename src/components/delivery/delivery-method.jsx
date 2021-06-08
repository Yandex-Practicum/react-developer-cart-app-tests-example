import React, { useEffect, useMemo } from 'react';
import styles from './delivery-method.module.css';
import { DeliveryMethodOption } from './delivery-method-option';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedItems } from '../../services/actions/delivery';
import { Loader } from '../../ui/loader/loader';

export const DeliveryMethod = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getRecommendedItems());
    },
    [dispatch]
  );

  const { deliveryMethods, deliveryMethodsRequest, selectedDeliveryId } = useSelector(
    state => state.delivery
  );

  const content = useMemo(
    () => {
      return deliveryMethodsRequest ? (
        <Loader size="large" />
      ) : (
        <ul className={styles.options}>
          {deliveryMethods.map((item, index) => {
            return (
              <DeliveryMethodOption
                key={index}
                {...item}
                checked={item.id === selectedDeliveryId}
              />
            );
          })}
        </ul>
      );
    },
    [deliveryMethodsRequest, deliveryMethods, selectedDeliveryId]
  );
  return (
    <div className={`${styles.container}`}>
      <h3 className={styles.title}>Выберите способ доставки:</h3>
      {content}
    </div>
  );
};
