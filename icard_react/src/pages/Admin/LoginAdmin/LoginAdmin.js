import React from "react";
import {LoginForm} from "../../../components/Admin"
import "./LoginAdmin.scss";

export function LoginAdmin() {
  return (
    <div className="login-admin">
      <div className="login-admin__Content">
        <h1>Entrada al panel</h1>
        <LoginForm/>    
      </div>
    </div>
  );
}
