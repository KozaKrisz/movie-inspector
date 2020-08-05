import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { GlobalStyle } from './globalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
