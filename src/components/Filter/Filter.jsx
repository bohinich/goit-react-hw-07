import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Пошук контактів за іменем
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Введіть ім'я..."
      />
    </label>
  );
}
