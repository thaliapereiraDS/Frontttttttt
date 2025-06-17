
import './Sensores.css'; 

const Sensores = () => {
  const sensores = [
    { local: 'Sala 101', temperatura: '23°C', umidade: '55%' },
    { local: 'Laboratório', temperatura: '26°C', umidade: '60%' },
  ];

  return (
    <section className="sensores" aria-labelledby="titulo-sensores" style={{ padding: '20px' }}>
      <h2 id="titulo-sensores" tabIndex="0">Monitoramento de Sensores</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sensores.map((s, index) => (
          <li key={index}>
            <article
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '10px',
                marginBottom: '10px',
              }}
              aria-label={`Sensor localizado em ${s.local}`}
            >
              <h3>{s.local}</h3>
              <p>Temperatura: {s.temperatura}</p>
              <p>Umidade: {s.umidade}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sensores;
