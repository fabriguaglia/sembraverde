import React from 'react';
import "./cart.css"
import { useAuth0 } from '@auth0/auth0-react';
import {obtenerCarritoDesdeFirebase} from "./products"
import {guardarCarritoEnFirebase} from "./products"

function Carrito({ cartItems, cerrarCarrito }) {
  const { user, isAuthenticated } = useAuth0();

  const totalPrice = cartItems.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

  const handleQuantityChange = (producto, cantidad) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === producto.id) {
        return { ...item, cantidad: item.cantidad + cantidad };
      }
      return item;
    });

    if (isAuthenticated) {
      obtenerCarritoDesdeFirebase(user.id)
        .then((carritoRecuperado) => {
          const updatedCarrito = carritoRecuperado.map((item) => {
            const matchingLocalItem = updatedCartItems.find((localItem) => localItem.id === item.id);
            if (matchingLocalItem) {
              return { ...item, cantidad: matchingLocalItem.cantidad };
            }
            return item;
          });

          guardarCarritoEnFirebase(user.id, updatedCarrito);
        })
        .catch((error) => {
          console.error("Error al recuperar o actualizar el carrito desde Firebase:", error);
        });
    }

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