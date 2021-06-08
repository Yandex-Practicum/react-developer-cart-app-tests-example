import React from 'react';
import { Tabs } from './tabs';
import { ProductsContainer } from './products-container';
import { Postponed } from './postponed';
import { useSelector } from 'react-redux';

export const Cart = () => {
  const currentTab = useSelector(state => state.cart.currentTab);
  return (
    <section>
      <Tabs />
      {currentTab === 'items' ? <ProductsContainer /> : <Postponed />}
    </section>
  );
};
