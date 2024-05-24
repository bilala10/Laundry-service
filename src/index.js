// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StripeProvider from './StripeProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StripeProvider>
      <App />
    </StripeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
