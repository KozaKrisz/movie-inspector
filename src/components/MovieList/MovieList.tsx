import React, { useEffect } from 'react';
import { getMovies, Movie } from '../../helpers/db';
import MovieItem from '../MovieItem';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../helpers/reducers';
import { REFRESH_MOVIES } from './actions';

const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movieList);
  const filterPhrase = useSelector((state: RootState) => state.filterPhrase);
  const dispatch = useDispatch();

  useEffect(() => {
    const initMovies = async () => {
      const movies = await getMovies<Movie[]>();
      dispatch({
        type: REFRESH_MOVIES,
        payload: movies,
      });
    };

    initMovies();
  }, [dispatch]);

  return (
    <S.MovieList>
      {movies &&
        movies
          .filter(
            (movie) =>
              movie.Name.toLowerCase().includes(filterPhrase.toLowerCase()) ||
              movie.Category.toLowerCase().includes(
                filterPhrase.toLowerCase()
              ) ||
              movie.Category.toLowerCase().includes(
                filterPhrase.toLowerCase()
              ) ||
              movie.AgeRating === parseInt(filterPhrase) ||
              movie.Cast.toLowerCase().includes(filterPhrase.toLowerCase()) ||
              movie.Genre.toLowerCase().includes(filterPhrase.toLowerCase())
          )
          .map((movie, index) => <MovieItem movie={movie} key={index} />)}
    </S.MovieList>
  );
};

export default MovieList;
