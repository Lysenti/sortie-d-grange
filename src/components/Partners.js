// src/components/Partners.js
import React from 'react';
import '../styles/Partners.css';

const Partners = () => {
  return (
    <div
      className="partners-container"
      style={{
        backgroundImage: "url('/assets/arriere_sdg_couleur.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Lecteur SoundCloud */}
      <div className="partners-soundcloud">
        <iframe
          width="100%"
          height="120"
          allow="autoplay"
          style={{ border: "none" }}
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ogusto-1/sets/pieces-et-main-duvre&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>

      {/* Liste des partenaires */}
      <div className="partners-items">
        <div className="partners-item">
          <div className="partners-icon">
            <img src="/assets/logo.png" alt="Partenaire 1" />
          </div>
          <div className="partners-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>

        <div className="partners-item">
          <div className="partners-icon">
            <img src="/assets/logo.png" alt="Partenaire 2" />
          </div>
          <div className="partners-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>

        <div className="partners-item">
          <div className="partners-icon">
            <img src="/assets/logo.png" alt="Partenaire 3" />
          </div>
          <div className="partners-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
