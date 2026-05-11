import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function Navigation() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Página de Inicio</div>} />
        <Route path="/tarjetas" element={<div>Página de Tarjetas</div>} />
      </Routes>
    </BrowserRouter>
  );
}