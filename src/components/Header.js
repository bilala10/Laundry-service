import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Logo />
        <div className="logout">
          <Link to="/logout">Log Out</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
