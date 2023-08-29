import React from 'react';
import "./pages.css";

const imagen = require("./alegriadelhogar.jpg");

const Hogar = () => {
  return (
    <div id="catalogoreg" className='principalproductsreg'>
      <div className="cardreg">
        <div className="card-contentreg">
          <h2 className="card-titlereg">Semillas de Alegría del hogar</h2>
          <div className="image-container">
          <img src={imagen} alt="Semillas de Alegría del hogar" className="card-imagereg" />
        </div>
          <p className='price'>Precio: $12.99</p>
            <p className="card-textreg">Estas semillas contienen la esencia de la alegría en forma de flores que iluminarán tu entorno con su encanto. Con una variedad de colores que van desde tonos suaves y cálidos hasta vibrantes matices, las flores de Alegría del Hogar son la elección ideal para añadir vitalidad y felicidad a tus espacios. Sus formas únicas y delicadas se alzan en alturas modestas, creando un ambiente acogedor y lleno de vida en tu jardín. Plantar y cultivar estas semillas es una experiencia gratificante, ya que su cuidado es relativamente sencillo y su floración es generosa. Las flores de Alegría del Hogar son versátiles, ideales para embellecer jardines y macetas, así como para crear arreglos florales que irradien calidez y confort. Si buscas un toque de alegría y vitalidad en tu hogar, las semillas de Alegría del Hogar son la elección perfecta para infundir tu entorno con una dosis de felicidad.</p>
            <div className="buttons-container">
            <button className="buttonreg">Comprar</button>
            <button className="buttonreg">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Hogar;