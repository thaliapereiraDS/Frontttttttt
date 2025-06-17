// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Sensores from './pages/Sensores';
import Graficos from './pages/Graficos';
import Mapa from './pages/Mapa';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sensores" element={<Sensores />} />
          <Route path="/graficos" element={<Graficos />} />
          <Route path="/mapa" element={<Mapa />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
