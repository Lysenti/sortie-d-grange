// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Press from './components/Press';
import Lyrics from './components/Lyrics';
import Shop from './components/Shop';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Header from './components/Header';
import './styles/Global.css';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

