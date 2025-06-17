import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Cidade Inteligente</h2>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/sensores">Sensores</Link></li>
        <li><Link to="/graficos">Gráficos</Link></li>
        <li><Link to="/mapa">Mapa</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
