import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App'
import configureStore, { history } from 'redux/store/configureStore';
import './index.css';

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);

