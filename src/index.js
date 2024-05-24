import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import StripeProvider from './StripeProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <StripeProvider>
        <App />
      </StripeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
