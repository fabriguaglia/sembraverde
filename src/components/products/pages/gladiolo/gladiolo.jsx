import React from 'react';
import "./pages.css";

const imagen = require("./gladiolo.jpg");

const Gladiolo = () => {
  return (
    <div id="catalogoreg" className='principalproductsreg'>
      <div className='catalogoreg'>
        <div className="cardreg">
          <img src={imagen} alt="Semillas de Gladiolo" className="card-imagereg" />
        </div>
        <div className="card-contentreg">
            <h2 className="card-titlereg">Semillas de Gladiolo</h2>
            <p className="card-textreg">Estas semillas encierran la promesa de flores impresionantes que transformarán tu jardín en un espectáculo de color y elegancia. Con una gama de tonos vibrantes que van desde rojos y naranjas hasta suaves rosas y blancos, los Gladiolos son la opción perfecta para agregar un toque de vitalidad a tus espacios exteriores. Sus altas espigas florales, que pueden alcanzar alturas notables de hasta 150 cm, añaden una dimensión vertical fascinante. Cultivar estas semillas es gratificante y relativamente sencillo, y sus flores en forma de espiga aportan estructura y elegancia tanto a los jardines como a los arreglos florales. Desde embellecer parterres hasta formar parte de arreglos florales en eventos especiales, las semillas de Gladiolo te permitirán crear un impacto visual duradero y sofisticado.</p>
            <p className='price'>Precio: $12.99</p>
            <button className="buttonreg">Comprar</button>
            <button className="buttonreg">Agregar al carrito</button>
          </div>
      </div>
    </div>
    )
}

export default Gladiolo;