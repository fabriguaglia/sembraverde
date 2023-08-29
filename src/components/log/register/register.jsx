import React from 'react'
import './register.css';

const Register = () => {
  return (
    <div className="principalreg">
    <h1>Crea tu cuenta</h1>
    <form>
    <div className="inputBox">
        <input
          type="email"
          name="email"
          required
        />
        <label>Correo</label>
      </div>
      <div className="inputBox">
        <input
          type="text"
          name="text"
          required
        />
        <label>Usuario</label>
      </div>
      <div className="inputBox">
        <input
          type="password"
          name="password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
        <label>Contraseña</label>
      </div>
      <div className='termycond'>
      <label className='termycond'>
          Acepto los <a className='acepterm' href="terminosycondiciones">Términos y Condiciones</a>
          <input type="checkbox" className='check'/>
        </label>
      </div>
      <input type="submit" name="sign-in" value="Registrarse" />
    </form>
  </div>
  );
};

export default Register;