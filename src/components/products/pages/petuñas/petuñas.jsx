import React from 'react';
import "./pages.css";

const imagen = require("./petuñas.jpeg");

const Petuñas = () => {
  return (
    <div id="catalogoreg" className='principalproductsreg'>
      <div className="cardreg">
        <div className="card-contentreg">
          <h2 className="card-titlereg">Semillas de Petuñas</h2>
          <div className="image-container">
          <img src={imagen} alt="Semillas de Petuñas" className="card-imagereg" />
        </div>
          <p className='price'>Precio: $12.99</p>
            <p className="card-textreg">Estas semillas contienen el potencial de traer un estallido de color y fragancia a tu jardín. Con una amplia paleta de colores que abarca desde tonos vivos como el rosa, morado y blanco, hasta los matices suaves y pastel, las Petunias son una elección ideal para embellecer tus espacios al aire libre. Sus flores, de forma única y encantadora, desprenden una fragancia delicada que agrega un toque aromático al ambiente. Cultivar estas semillas es una experiencia gratificante, ya que las plantas crecen con vigor y florecen profusamente durante la temporada. Las Petunias se destacan tanto en macetas como en parterres, y son perfectas para añadir encanto y color a balcones, terrazas y jardines. Desde atraer mariposas hasta crear hermosos ramos de flores cortadas, las semillas de Petunia te permitirán disfrutar de un jardín lleno de vitalidad y belleza.</p>
            <div className="buttons-container">
            <button className="buttonreg">Comprar</button>
            <button className="buttonreg">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>  
    )
}

export default Petuñas;