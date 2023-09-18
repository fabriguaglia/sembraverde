import React, {useEffect, useState} from 'react';
import "./cart.css"
import { useAuth0 } from '@auth0/auth0-react';
import {obtenerCarritoDesdeFirebase} from "./products"
import {guardarCarritoEnFirebase} from "./products"
import firebase from '../firebase';
import "firebase/firestore";

function Carrito({ cartItems, cerrarCarrito, setCartItems } = {}) {
  const { user, isAuthenticated } = useAuth0();

  const totalPrice = cartItems.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);

  useEffect(() => {
    if (isAuthenticated) {
      obtenerCarritoDesdeFirebase(user.id)
        .then((carritoRecuperado) => {
          const updatedCartItems = cartItems.map((item) => {
            const matchingLocalItem = carritoRecuperado.find((localItem) => localItem.id === item.id);
            if (matchingLocalItem) {
              return { ...item, cantidad: matchingLocalItem.cantidad };
            }
            return item;
          });

          guardarCarritoEnFirebase(user.id, updatedCartItems);
          setCartItems(updatedCartItems);
        })
        .catch((error) => {
          console.error("Error al recuperar o actualizar el carrito desde Firebase:", error);
        });
    }
  }, [isAuthenticated, user, cartItems, setCartItems]);
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