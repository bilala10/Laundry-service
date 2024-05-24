import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Account from './components/Account';
import OrderForm from './components/OrderForm';
import PaymentMethods from './components/PaymentMethods';
import Preferences from './components/Preferences';
import Subscription from './components/Subscription';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
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
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
