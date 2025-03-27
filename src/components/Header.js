// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
      <header className="navigation">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#home">Accueil</a></li>
            <li><a href="#press">Presse</a></li>
            <li><a href="#lyrics">Paroles</a></li>
            <li><a href="#shop">Boutique</a></li>
            <li><a href="#partners">Partenariats</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;