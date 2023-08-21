import React from 'react';
import "./products.css";

const productos = [
  {
    id: 1,
    nombre: "Semillas de Petuñas",
    pagina: "Semillas-de-petuñas",
    imagen: require("./img/prodimg/petuñas.jpeg"),
    precio: 9.99,
  },
  {
    id: 2,
    nombre: "Semillas de Margarita",
    pagina: "Semillas-de-margarita",
    imagen: require("./img/prodimg/margaritas.jpeg"),
    precio: 12.99,
  },
  {
    id: 3,
    nombre: "Semillas de Alegría del hogar",
    pagina: "Semillas-de-alegría-del-hogar",
    imagen: require("./img/prodimg/alegriadelhogar.jpg"),
    precio: 12.99,
  },
  {
    id: 3,
    nombre: "Semillas de Gladiolo",
    pagina: "Semillas-de-gladiolo",
    imagen: require("./img/prodimg/gladiolo.jpg"),
    precio: 12.99,
  },
  
];

function Products() {
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
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;