// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Account from './components/Account';
import OrderForm from './components/OrderForm';
import PaymentMethods from './components/PaymentMethods';
import Preferences from './components/Preferences';
import Subscription from './components/Subscription';
import SignUpStep1 from './components/SignUpStep1';
import SignUpStep2 from './components/SignUpStep2';
import SignUpStep3 from './components/SignUpStep3';
import './App.css';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState({});

  const createOrder = async (orderDetails) => {
    try {
      const response = await axios.post('http://localhost:5002/api/orders', orderDetails);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/payment" element={<PaymentMethods />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signup-step-1" element={<SignUpStep1 setUser={setUser} />} />
            <Route path="/signup-step-2" element={<SignUpStep2 user={user} setUser={setUser} />} />
            <Route path="/signup-step-3" element={<SignUpStep3 user={user} setUser={setUser} createOrder={createOrder} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

