import React from "react";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;
  return (
    <div className="client-layout">
      <div className="client-layout__header">
          {/* Aquí irá el logo o nombre del restaurante */}
          <span>iCard Client</span>
      </div>
      <div className="client-layout__content">{children}</div>
    </div>
  );
}
