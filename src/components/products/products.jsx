import React, {useState} from 'react';
import { useEffect } from 'react';
import "./products.css";
import Carrito from './cart';
import firebase from '../firebase';
import "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";

const productos = [
  {
    id: 1,
    nombre: "Semillas de Petuñas",
    pagina: "semillas-de-petuñas",
    imagen: require("./img/prodimg/petuñas.jpeg"),
    precio: 9.99,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Semillas de Margarita",
    pagina: "semillas-de-margarita",
    imagen: require("./img/prodimg/margaritas.jpeg"),
    precio: 12.99,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Semillas de Alegría del hogar",
    pagina: "semillas-de-alegria-del-hogar",
    imagen: require("./img/prodimg/alegriadelhogar.jpg"),
    precio: 12.99,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Semillas de Gladiolo",
    pagina: "semillas-de-gladiolo",
    imagen: require("./img/prodimg/gladiolo.jpg"),
    precio: 12.99,
    cantidad: 1,
  },
  
];

export const guardarCarritoEnFirebase = async (usuarioId, carrito) => {
  try {
    const db = firebase.firestore();
    const carritoRef = db.collection("carritos").doc(usuarioId);
    await carritoRef.set({ carrito });
    console.log("Carrito guardado en Firebase correctamente.");
  } catch (error) {
    console.error("Error al guardar el carrito en Firebase:", error);
  }
};

export const obtenerCarritoDesdeFirebase = async (usuarioId) => {
  try {
    const db = firebase.firestore();
    const carritoRef = db.collection("carritos").doc(usuarioId);
    const carritoDoc = await carritoRef.get();
    if (carritoDoc.exists) {
      return carritoDoc.data().carrito;
    }
  } catch (error) {
    console.error("Error al obtener carrito.");
  }
};

function Products() {
  const user = useAuth0();
  const usuarioId = user;
  const { isAuthenticated } = useAuth0();

  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const addToCart = (producto) => {
    const existingItem = cartItems.find(item => item.id === producto.id);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...producto, cantidad: 1 }]);
    }
    if (isAuthenticated && user) {
      guardarCarritoEnFirebase(user.sub, cartItems);
    }
  };

  useEffect(() => {
    if (isAuthenticated && user) {
      const obtenerCarritoDesdeFirebase = async () => {
        try {
          const db = firebase.firestore();
          const carritoRef = db.collection("carritos").doc(user.sub);
          const carritoDoc = await carritoRef.get();
          if (carritoDoc.exists) {
            setCartItems(carritoDoc.data().carrito);
          }
        } catch (error) {
          console.error("Error al obtener el carrito desde Firebase:", error);
        }
      };

      obtenerCarritoDesdeFirebase();
    }
  }, [isAuthenticated, user]);

  const toggleCart = async () => {
    setCartVisible(!cartVisible);
    if (!cartVisible && isAuthenticated) {
      const carritoRecuperado = await obtenerCarritoDesdeFirebase(usuarioId);
      setCartItems(carritoRecuperado);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      obtenerCarritoDesdeFirebase(usuarioId).then((carritoRecuperado) => {
        setCartItems(carritoRecuperado);
      });
    }
  }, [isAuthenticated, usuarioId]);

  return (
    <div id="catalogo" className='principalproducts'>
      <h1 className='productstitle'>Conecta con la naturaleza</h1>
      <div className='catalogo'>
        {productos.map((producto) => (
          <div key={producto.id} className='producto'>
            <a href={`/producto/${producto.pagina}`}>
              <div className='imagen-container'>
                <img src={producto.imagen} alt={producto.pagina} />
              </div>
            </a>
            <a href={`/producto/${producto.pagina}`} className='link'>
              <p>{producto.nombre}</p>
            </a>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <button className="buttonitem" onClick={() => addToCart(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
      {!cartVisible && <button className='abrircarrito buttonitem' onClick={toggleCart}>Abrir Carrito</button>}
      {cartVisible && (
        <Carrito cartItems={cartItems} cerrarCarrito={toggleCart} />
      )}
    </div>
  );
}

export default Products;