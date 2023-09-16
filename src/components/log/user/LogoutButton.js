import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./registerstyles.css"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
   <div className="profilebutton">
    <button className="botonperfil" onClick={() => logout()}>logout</button>
    </div>
    )
};

export default LogoutButton;