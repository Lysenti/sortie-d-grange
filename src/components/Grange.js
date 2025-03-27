// src/components/Grange.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';
import '../styles/Grange.css';


console.log("Grange.js chargé !");

const Grange = () => {
  console.log('Grange affiché');

  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const toggleMute = () => {
    setMuted(prev => !prev);
  };

  const togglePlay = () => {
    setPlaying(prev => !prev);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="grange-container">
      {/* Vidéo avec ReactPlayer */}
      <div className="video-background">
        <ReactPlayer
          url="https://youtu.be/hc90hFg-Mm0?si=vf1c9kT2eV4xMZIZ"
          playing={playing}
          muted={muted}
          controls={false}
          width="100%"
          height="100%"
          loop={false}
        />
      </div>

      {/* Boutons de contrôle */}
      {open && (
        <div className="video-controls">
          <button onClick={toggleMute}>{muted ? '🔇' : '🔊'}</button>
          <button onClick={togglePlay}>{playing ? '⏸ Pause' : '▶️ Lecture'}</button>
          <button onClick={goToHome}>🚪 Entrer dans le site</button>
        </div>
      )}

      {/* Portes */}
      <div className={`porte porte-gauche ${open ? 'open' : ''}`} onClick={handleClick}>
        <img src="/assets/porte_gauche.png" alt="Porte gauche" />
      </div>
      <div className={`porte porte-droite ${open ? 'open' : ''}`} onClick={handleClick}>
        <img src="/assets/porte_droite.png" alt="Porte droite" />
      </div>
    </div>
  );
};

export default Grange;
