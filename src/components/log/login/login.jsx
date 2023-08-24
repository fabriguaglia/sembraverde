import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className='logindiv'>
    <div className="principallogin">
    <h1>Inicia sesión</h1>
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
      <input type="submit" name="sign-in" value="Iniciar sesión" />
    </form>
    <p className='loginp'>¿No tienes una cuenta? <a className='logina' href="/register">Regístrate aquí</a></p>
  </div>
  </div>
  );
};

export default Login;