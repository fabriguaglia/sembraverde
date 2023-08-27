import React from 'react';
import "./pages.css";

const imagen = require("./margaritas.jpeg");

const Margarita = () => {
  return (
    <div id="catalogoreg" className='principalproductsreg'>
      <div className='catalogoreg'>
        <div className="cardreg">
          <img src={imagen} alt="Semillas de Margarita" className="card-imagereg" />
        </div>
        <div className="card-contentreg">
            <h2 className="card-titlereg">Semillas de Margarita</h2>
            <p className="card-textreg">Descubre la belleza y alegría de cultivar tus propias flores con nuestras Semillas de Margarita. Estas semillas de la variedad 'Bellis Perennis' te brindarán la oportunidad de crear un encantador rincón lleno de color en tu jardín. Las Margaritas son conocidas por su aspecto radiante y su capacidad para atraer a las abejas y mariposas, convirtiendo tu espacio exterior en un verdadero paraíso natural.

Cada paquete de Semillas de Margarita contiene una cuidadosa selección de semillas de alta calidad de la especie 'Bellis Perennis', listas para ser sembradas y ver crecer hermosas flores. Esta variedad de Margaritas es resistente y fácil de cultivar, lo que las hace ideales tanto para jardineros principiantes como experimentados.</p>
            <p className='price'>Precio: $12.99</p>
            <button className="buttonreg">Comprar</button>
            <button className="buttonreg">Agregar al carrito</button>
          </div>
      </div>
    </div>
  )
}

export default Margarita;