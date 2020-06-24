import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App'
import { HelmetProvider } from 'react-helmet-async';
import configureStore, { history } from 'redux/store/configureStore';
import './index.css';

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App store={store} history={history}/>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

