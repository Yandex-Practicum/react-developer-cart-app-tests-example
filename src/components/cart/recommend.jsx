import React, { useEffect, useMemo } from 'react';
import styles from './recommend.module.css';
import { Title } from '../../ui/title/title';
import { RecommendItem } from './recommend-item';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendedItems } from '../../services/thunks';
import { Loader } from '../../ui/loader/loader';

export const Recommend = ({ extraClass }) => {
  const dispatch = useDispatch();

  const { recommendedItems, recommendedItemsRequest } = useSelector(state => state.cart);

  useEffect(
    () => {
      dispatch(getRecommendedItems());
    },
    [dispatch]
  );

  const content = useMemo(
    () => {
      return recommendedItemsRequest ? (
        <Loader size="large" />
      ) : (
        recommendedItems.map((item, index) => {
          return <RecommendItem key={index} {...item} />;
        })
      );
    },
    [recommendedItemsRequest, recommendedItems]
  );

  return (
    <section className={`${styles.container} ${extraClass}`}>
      <Title
        text="Обычно с этим покупают"
        amount={(recommendedItems && recommendedItems.length) || ''}
      />
      <div className={styles.items}>{content}</div>
    </section>
  );
};
