import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/order">Place Order</Link></li>
        <li><Link to="/payment">Payment Methods</Link></li>
        <li><Link to="/preferences">Preferences</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/account">Account</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
