import { Movie } from '../../helpers/db';

export const REFRESH_MOVIES = 'REFRESH_MOVIES';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const CHANGE_FILTER = 'CHANGE_FILTER';

interface RefreshMovies {
  type: typeof REFRESH_MOVIES;
  payload: Movie[];
}

interface SelectMovie {
  type: typeof SELECT_MOVIE;
  payload: Movie | null;
}

interface ChangeFilter {
  type: typeof CHANGE_FILTER;
  payload: string;
}

export type MovieListActionTypes = RefreshMovies | SelectMovie | ChangeFilter;
