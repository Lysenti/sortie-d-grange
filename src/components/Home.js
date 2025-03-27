// src/components/Home.js
import React from 'react';
import '../styles/Home.css';

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
      }}
    >
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

      <img className="image3-overlay" src="/assets/image3.jpg" alt="Image 3 décorative" />
      <img className="image2-overlay" src="/assets/image2.png" alt="Image 2 décorative" />
      <img className="image1-overlay" src="/assets/image1.png" alt="Image 1 centrée" />
    </div>
  );
};

export default Home;

