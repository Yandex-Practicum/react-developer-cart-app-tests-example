import React from 'react';
import styles from './tab.module.css';
import { useDispatch } from 'react-redux';
import { tabSwitch } from '../../services/actions';

export const Tab = ({ text, active }) => {
  const dispatch = useDispatch();
  const switchTab = () => {
    dispatch(tabSwitch());
  };
  const className = `${styles.tab} ${active ? styles.tab_type_current : ''}`;
  return (
    <div className={`${className}`} onClick={switchTab}>
      {text}
    </div>
  );
};
