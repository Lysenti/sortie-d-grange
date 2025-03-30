// src/components/Shop.js
import React from 'react';
import '../styles/Shop.css';

const Shop = () => {
  return (
    <div
      className="shop-container"
      style={{
        backgroundImage: "url('/assets/arriere_sdg_couleur.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px 20px'
      }}
    >
      {/* Lien SoundCloud */}
      <div className="shop-soundcloud">
        <iframe
          width="100%"
          height="120"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ogusto-1/sets/corrosion-superficielle&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>

      {/* Articles */}
      <div className="shop-items">
        <div className="shop-item">
          <div className="shop-icon">
            <img src="/assets/image2.png" alt="Article 1" />
          </div>
          <div className="shop-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="shop-status available">✔</div>
        </div>

        <div className="shop-item">
          <div className="shop-icon">
            <img src="/assets/image3.jpg" alt="Article 2" />
          </div>
          <div className="shop-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="shop-status available">✔</div>
        </div>

        <div className="shop-item">
          <div className="shop-icon">
            <img src="/assets/logo.png" alt="Article 3" />
          </div>
          <div className="shop-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="shop-status unavailable">❌</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

