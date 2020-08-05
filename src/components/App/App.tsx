import React from 'react';
import MovieList from '../MovieList';
import MovieProfile from '../MovieProfile';
import FilterField from '../FilterField';
import { Provider } from 'react-redux';
import store from '../../helpers/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <FilterField />
      <MovieList />
      <MovieProfile />
    </Provider>
  );
};

export default App;
