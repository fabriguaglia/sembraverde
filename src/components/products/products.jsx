import React, {useState} from 'react';
import "./products.css";
import Carrito from '../header/cart';

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

function Products() {
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
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

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
            <button onClick={() => addToCart(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
      {!cartVisible && <button className='abrircarrito' onClick={toggleCart}>Abrir Carrito</button>}
      {cartVisible && (
        <Carrito cartItems={cartItems} cerrarCarrito={toggleCart} />
      )}
    </div>
  );
}

export default Products;