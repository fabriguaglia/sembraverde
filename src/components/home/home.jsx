import React from 'react'
import "./home.css"
import Products from '../products/products'

function Home() {
  const scrollCatalogo = (event) => {
    event.preventDefault();
    const catalogoEl = document.getElementById('catalogo');
    if (catalogoEl) {
      catalogoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    <div className='principal'>
        <div>
            <h1>Cultiva un futuro verde</h1>
            <h3>Encuentra tu semilla en nuestra eco-tienda virtual</h3>
            <div className="buttoncontainer">
      <a href="/products" className="button" onClick={scrollCatalogo}>Explora nuestra tienda</a>
            </div>
        </div>
    </div>
    <Products />
    </>
  )
}
export default Home