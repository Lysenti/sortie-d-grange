// src/components/Home.js
import React from 'react';
import '../styles/Home.css';
import Grange from './Grange';

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/assets/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Navigation */}
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

      {/* Images décoratives */}
      <img className="image3-overlay" src="/assets/image3.jpg" alt="Image 3 décorative" />
      <img className="image2-overlay" src="/assets/image2.png" alt="Image 2 décorative" />

      {/* Superposition du composant Grange */}
      <div className="grange-overlay">
        <Grange />
      </div>
    </div>
  );
};

export default Home;
