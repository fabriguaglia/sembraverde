import React from 'react';
import "./products.css";

const productos = [
  {
    id: 1,
    nombre: "Semillas-de-petuñas",
    imagen: "imagen_1.jpg",
    precio: 9.99,
  },
  {
    id: 2,
    nombre: "Semillas-de-margarita",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 3,
    nombre: "Semillas-de-alegría-del-hogar",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 4,
    nombre: "Bulbos-de-fresias",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 5,
    nombre: "Semillas-de-coral",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 6,
    nombre: "Semillas-de-lovelia",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 7,
    nombre: "Semillas-de-copete",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 8,
    nombre: "Semillas-de-",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
  {
    id: 9,
    nombre: "Producto 2",
    imagen: "imagen_2.jpg",
    precio: 12.99,
  },
];

function Products() {
  return (
    <div className='principalproducts'>
      <h1 className='productstitle'>Conecta con la naturaleza</h1>
      <div className='catalogo'>
        {productos.map((producto) => (
          <div key={producto.id} className='producto'>
            <a href={`/producto/${producto.nombre}`}>
              <img src={producto.imagen} alt={producto.nombre} />
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