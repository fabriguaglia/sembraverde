import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./registerstyles.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="profilebutton">
      <button className="botonperfil" onClick={() => loginWithRedirect()}>login</button>
    </div>
  );
};

export default LoginButton;