import React, { useState } from 'react';
import "./header.css";
import imgImport from '../../assets/fotos';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/"><img src={imgImport.plantaLogo} alt=""></img></a>
      </div>
      <a href="/" className="titulo">Sembraverde</a>
      <div className={`burger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        {menuActive ? (
          <div className="close-icon">
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          <div className="bar"></div>
        )}
      </div>
      <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
        <a href="/login">Login</a>
        <a href="/about">Acerca de</a>
        <a href="/contacto">Contáctanos</a>
      </nav>
    </header>
  )
}

export default Header;