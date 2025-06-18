// Home.jsx
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header aria-labelledby="titulo">
        <h1 id="titulo-principal" tabIndex="0">Bem-vindo à Cidade Inteligente</h1>
        <p>Explore os sensores da sua escola em tempo real!</p>
      </header>

      <section className="preview-sensores" aria-labelledby="preview-sensores">
        <h2 id="preview-sensores">Prévia dos Sensores</h2>
        <p>Temperatura: 23°C | Umidade: 60%</p>
      </section>
    </div>
  );
};

export default Home;
