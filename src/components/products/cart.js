import React from 'react';
import "./cart.css"

function Carrito({ cartItems, cerrarCarrito }) {

  const totalPrice = cartItems.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

  const handleQuantityChange = (producto, cantidad) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === producto.id) {
        return { ...item, cantidad: item.cantidad + cantidad };
      }
      return item;
    });

  };
    return (
      <div className="carrito-overlay">
        <div className="carrito">
          <button className="cerrar-carrito" onClick={cerrarCarrito}>Cerrar</button>
          <h2>Carrito de Compras</h2>
          <ul className='listacarrito'>
            {cartItems.map((producto) => (
                <>
                <div >
                <img id='imagecart' src={producto.imagen} alt={producto.pagina} />
              </div>
              <li className="listadeprecio" key={producto.id}>
                <p className='nombreproducto'>{producto.nombre}</p>
                <p>Precio: ${producto.precio.toFixed(2)}</p>
                <p>Cantidad: {producto.cantidad}</p>
              </li>
              </>
            ))}
          </ul>
            <p className="preciototal">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default Carrito;