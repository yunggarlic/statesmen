import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline} from '@material-ui/core';
import 'fontsource-roboto'

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>,
  document.getElementById('app')
);
