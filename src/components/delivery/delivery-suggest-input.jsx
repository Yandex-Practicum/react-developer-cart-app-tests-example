import React, { useState, useRef, useEffect } from 'react';
import { withYMaps } from 'react-yandex-maps';
import { MainButton } from '../../ui/main-button/main-button';
import { Input } from '../../ui/input/input';
import styles from './delivery.module.css';

export const MapSuggestComponent = withYMaps(
  ({ onChange, value, ymaps }) => {
    const inputRef = useRef(null);

    const [_value, _setValue] = useState(value);

    useEffect(
      () => {
        _setValue(value);
      },
      [value]
    );

    useEffect(
      () => {
        new ymaps.SuggestView('suggest');
      },
      [ymaps.SuggestView]
    );

    const onBlur = e => {
      setTimeout(() => onChange(inputRef.current.value), 0);
    };

    const onEdit = e => {
      _setValue(e.target.value);
    };

    return (
      <>
        <Input
          type="text"
          placeholder="Введите адрес"
          inputWithBtn={true}
          value={_value}
          extraClass={styles.input}
          onChange={onEdit}
          inputRef={inputRef}
          onBlur={onBlur}
          id="suggest"
        />
        <MainButton type="button" inputButton={true} onClick={onBlur}>
          Найти
        </MainButton>
      </>
    );
  },
  true,
  ['SuggestView', 'geocode', 'coordSystem.geo']
);
