import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import StripeProvider from './StripeProvider';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <StripeProvider>
        <App />
      </StripeProvider>
    </AuthProvider>
  </React.StrictMode>
);
