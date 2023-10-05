import React from 'react'
import "./aboutus.css"
import { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCGBmFOZylyUK4zf4jdlQEAwGOISTjkME8",
  authDomain: "sembraverde.firebaseapp.com",
  projectId: "sembraverde",
  storageBucket: "sembraverde.appspot.com",
  messagingSenderId: "867266924396",
  appId: "1:867266924396:web:4002827dac330b57356d49",
  measurementId: "G-H8TP9PK06N"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

function AboutUs() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      Name: nombre,
      Email: email,
      Mensaje: mensaje,
    };

    const contactRef = ref(database, 'contact');

    push(contactRef, data)
      .then(() => {
        alert('Mensaje guardado');
        setNombre('');
        setEmail('');
        setMensaje('');
      })
      .catch(() => {
        alert('Mensaje no guardado');
      });
  };

  return (
    <div className='aboutbody datos'>
      <h1 className='abouttitle'>Contactanos</h1>
      <form className='contactForm' onSubmit={handleSubmit}>
        <label>Correo</label>
        <div>
          <input
            type='email'
            name='email'
            className='emailinput'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label>Usuario</label>
        <div>
          <input
            type='text'
            name='text'
            className='userinput'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <label>Deja tu mensaje</label>
        <div className='mensaje'>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <input type='submit' value='Enviar' id='enviar' />
      </form>
    </div>
  );
}
export default AboutUs;