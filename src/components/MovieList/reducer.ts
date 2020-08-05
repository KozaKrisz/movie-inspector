import { Movie } from '../../helpers/db';
import {
  MovieListActionTypes,
  REFRESH_MOVIES,
  SELECT_MOVIE,
  CHANGE_FILTER,
} from './actions';

const MovieListReducer = (
  state: Movie[] | null = null,
  action: MovieListActionTypes
): Movie[] | null => {
  switch (action.type) {
    case REFRESH_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

const SelectedMovieReducer = (
  state: Movie | null = null,
  action: MovieListActionTypes
): Movie | null => {
  switch (action.type) {
    case SELECT_MOVIE:
      return action.payload;
    default:
      return state;
  }
};

const FilterPhraseReducer = (
  state: string = '',
  action: MovieListActionTypes
): string => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export { MovieListReducer, SelectedMovieReducer, FilterPhraseReducer };
