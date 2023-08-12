import React from 'react';
import "./header.css";
import imgImport from '../../assets/fotos';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"><img src={imgImport.plantaLogo} alt=""></img></a>
      </div>
      <div className="titulo">Sembraverde</div>
      <nav className="nav-links">
        <a href="/login">Login</a>
        <a href="/about">Acerca de</a>
        <a href="/contacto">Contáctanos</a>
      </nav>
    </header>
  )
}

export default Header;