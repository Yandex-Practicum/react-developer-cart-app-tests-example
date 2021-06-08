import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Product} from './product'
import {decreaseItem, increaseItem, deleteItem} from '../../services/actions'


export const ProductContainer = ({ src, id, text, qty, price }) => {
  const dispatch = useDispatch();
  const discount = useSelector(state => state.cart.promoDiscount);
  const discountedPrice = ((price - price * (discount / 100)) * qty).toFixed(0);
  const onDelete = () => {
    dispatch(deleteItem(id));
  };
  const decrease = () => {
    if (qty === 1) {
      onDelete();
    } else {
      dispatch(decreaseItem(id));
    }
  };
  const increase = () => {
    dispatch(increaseItem(id));
  };
  const productProps = {
    src,
    id,
    text,
    qty,
    price,
    decrease,
    increase,
    discount,
    discountedPrice,
    onDelete
  }
  return <Product {...productProps} />
}