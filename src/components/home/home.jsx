import React from 'react'
import "./home.css"
import Products from '../products/products'

function Home() {
  return (
    <>
    <div className='principal'>
        <div>
            <h1>Cultiva un futuro verde</h1>
            <h3>Encuentra tu semilla en nuestra eco-tienda virtual</h3>
            <div className="buttoncontainer">
      <a href="/productos" className="button">Explora nuestra tienda</a>
    </div>
        </div>
    </div>
    <Products />
    </>
  )
}
export default Home