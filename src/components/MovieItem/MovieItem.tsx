import React from 'react';
import { Movie } from '../../helpers/db';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { SELECT_MOVIE } from '../MovieList/actions';

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch({
      type: SELECT_MOVIE,
      payload: movie,
    });
  };

  return (
    <S.MovieItem onClick={onClick} bgUrl={movie.BackgroundUrl}>
      <S.MovieTitle>{movie.Name}</S.MovieTitle>
    </S.MovieItem>
  );
};

export default MovieItem;
