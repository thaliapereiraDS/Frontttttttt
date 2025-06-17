
import { Link } from 'react-router-dom';
import Navbar from '../componentes/Navbar';
import Footer from '../componentes/Footer';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <header aria-labelledby="titulo-principal">
        <h1 id="titulo-principal" tabIndex="0">Bem-vindo à Cidade Inteligente</h1>
        <p>Explore os sensores da sua escola em tempo real!</p>
      </header>

      <nav aria-label="Navegação principal" style={{ marginBottom: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '15px' }}>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sensores">Sensores</Link></li>
          <li><Link to="/graficos">Gráficos</Link></li>
          <li><Link to="/mapa">Mapa</Link></li>
        </ul>
      </nav>

      <section className="preview-sensores" aria-labelledby="preview-sensores">
        <h2 id="preview-sensores">Prévia dos Sensores</h2>
        <p>Temperatura: 23°C | Umidade: 60%</p>
        {/* Você pode trocar por um componente futuramente */}
      </section>

      <Footer />
    </div>
  );
};

export default Home;
