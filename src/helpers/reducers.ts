import { combineReducers } from 'redux';
import {
  MovieListReducer,
  SelectedMovieReducer,
  FilterPhraseReducer,
} from '../components/MovieList/reducer';
import { Movie } from '../helpers/db';

export interface RootState {
  movieList: Movie[] | null;
  selectedMovie: Movie | null;
  filterPhrase: string;
}

export default combineReducers({
  movieList: MovieListReducer,
  selectedMovie: SelectedMovieReducer,
  filterPhrase: FilterPhraseReducer,
});
