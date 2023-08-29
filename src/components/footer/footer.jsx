import React from 'react';
import './footer.css';
import imgImport from './fotos';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href='/products'>Productos</a>
        <a href='/login'>Login</a>
        <a href='/about'>Acerca de</a>
        <a href='/contacto'>Contacto</a>
      </div>
      <div className="footer-bottom">
        <div className="footer-icon">
          <img src={imgImport.plantaLogo} alt=""/>
        </div>
        <p>© 2023 Sembraverde. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
