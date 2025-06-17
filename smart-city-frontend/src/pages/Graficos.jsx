import { useEffect, useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import axios from 'axios';
import './Graficos.css'; 

const Graficos = () => {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const resposta = await axios.get('http://localhost:8000/api/sensores/');
        setDados(resposta.data);
      } catch (err) {
        setErro('Erro ao carregar os dados dos sensores.');
      } finally {
        setCarregando(false);
      }
    };

    buscarDados();
  }, []);

  return (
    <section aria-labelledby="titulo-graficos" className="grafico-container" style={{ padding: '20px' }}>
      <h2 id="titulo-graficos" tabIndex="0">Gráficos de Sensores</h2>

      {carregando && <p>Carregando dados...</p>}
      {erro && <p role="alert" style={{ color: 'red' }}>{erro}</p>}

      {!carregando && !erro && dados.length > 0 ? (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nome" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperatura" stroke="#ff7300" name="Temperatura (°C)" />
            <Line type="monotone" dataKey="umidade" stroke="#387908" name="Umidade (%)" />
          </LineChart>
        </ResponsiveContainer>
      ) : null}

      {!carregando && !erro && dados.length === 0 && (
        <p>Nenhum dado disponível para exibir.</p>
      )}
    </section>
  );
};

export default Graficos;
