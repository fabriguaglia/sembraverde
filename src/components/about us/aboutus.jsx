import React from 'react'
import "./aboutus.css"

 function AboutUs() {
  return (
    <div className='aboutbody datos'>
      <h1 className='abouttitle'>Contactanos</h1>
      <form>
        <label>Correo</label>
    <div>
        <input type="email" name="email" className='emailinput'/>
        </div>
        <label>Usuario</label>
        <div>
        <input type="text" name="text" className='userinput'/>
        </div>
        <label>Deja tu mensaje</label>
      <div className='mensaje'>
        <textarea></textarea>
      </div>
      <input type="submit" value="Envíar" id='enviar'/>
    </form>
    </div>
  )
}
export default AboutUs