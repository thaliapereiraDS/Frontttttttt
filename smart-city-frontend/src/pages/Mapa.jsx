
import mapa from '../assets/planta-escola.png'; 
import './Mapa.css'; 
const Mapa = () => {
  return (
    <section className="mapa" aria-labelledby="titulo-mapa" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 id="titulo-mapa" tabIndex="0">Localização dos Sensores</h2>
      <img
        src={mapa}
        alt="Mapa da escola com marcações dos sensores"
        style={{ width: '100%', maxWidth: '700px', borderRadius: '8px' }}
      />
    </section>
  );
};

export default Mapa;

