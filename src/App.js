import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Account from './components/Account';
import OrderForm from './components/OrderForm';
import PaymentMethods from './components/PaymentMethods';
import Preferences from './components/Preferences';
import Subscription from './components/Subscription';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Dashboard />}>
              <Route path="/home" element={<Home />} />
              <Route path="/order" element={<OrderForm />} />
              <Route path="/payment" element={<PaymentMethods />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/account" element={<Account />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
