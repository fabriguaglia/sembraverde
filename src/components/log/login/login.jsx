import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className="principallogin">
      <h1 className='iniciarsesion'>Iniciar sesión</h1>
      <form>
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
        <div className="buttoncontainer">
      <input type="submit" className="button" value={"Iniciar sesión"} />
        </div>      
        </form>
      <p className='registerp'>¿No tienes una cuenta? <a className='registera' href="/register">Regístrate aquí</a></p>
    </div>
  );
};

export default Login;