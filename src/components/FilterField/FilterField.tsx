import React from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_FILTER } from '../MovieList/actions';
import * as S from './styles';

const FilterField: React.FC = () => {
  const dispatch = useDispatch();

  const handleOnChange = (event: any): void => {
    const target = event.target as HTMLInputElement;
    dispatch({
      type: CHANGE_FILTER,
      payload: target.value,
    });
  };

  return (
    <S.FilterField
      type="text"
      onChange={handleOnChange}
      placeholder="Search movie..."
    />
  );
};

export default FilterField;
