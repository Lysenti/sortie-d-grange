// src/components/Press.js
import React from 'react';
import '../styles/Press.css';

const Press = () => {
  return (
    <div
      className="press-container"
      style={{
        backgroundImage: "url('/assets/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
      }}
    >

      {/* Images décoratives */}
      <img className="image2-overlay" src="/assets/image2.png" alt="Décoration 2" />
      <img className="image3-overlay" src="/assets/image3.jpg" alt="Décoration 3" />

      {/* Images de presse */}
      <img className="press-image press-1" src="/assets/presse_1.png" alt="Article 1" />
      <img className="press-image press-2" src="/assets/presse_2.png" alt="Article 2" />
      <img className="press-image press-3" src="/assets/presse_3.png" alt="Article 3" />
      <img
      className="gif-facing" src="/assets/exe-facing-couleurs-SDG.gif" alt="GIF décoratif en bas à droite"/>
    </div>
  );
};

export default Press;
