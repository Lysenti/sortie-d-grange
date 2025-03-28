// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="navigation">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/press">Presse</Link></li>
          <li><Link to="/lyrics">Paroles</Link></li>
          <li><Link to="/shop">Boutique</Link></li>
          <li><Link to="/partners">Partenariats</Link></li>
          <li><Link to="/contact">Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
