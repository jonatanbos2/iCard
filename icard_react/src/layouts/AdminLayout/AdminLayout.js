import React from "react";
import {LoginAdmin} from "../../pages/Admin"
import "./AdminLayout.scss";

export function AdminLayout(props) {
  const { children } = props;
  const auth = null;
  if(!auth) return <LoginAdmin/>;
  
  return (
    <div className="admin-layout">
      <div className="admin-layout__menu">
        {/* Aquí irá nuestro SideMenu más adelante */}
        <p>Menu Lateral</p> 
      </div>
      <div className="admin-layout__main-content">
        {/* Aquí irá nuestro TopMenu */}
        <p>Barra Superior</p>
        <div className="admin-layout__content">{children}</div>
      </div>
    </div>
  );
}