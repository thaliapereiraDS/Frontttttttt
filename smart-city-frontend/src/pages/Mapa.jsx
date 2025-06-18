import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Mapa.css';

// Corrige o bug do ícone padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Mapa = () => {
  const position = [-23.55052, -46.633308]; // Exemplo: São Paulo, substitua pelas coordenadas da sua escola/sensores

  return (
    <section className="mapa" aria-labelledby="titulo-mapa" style={{ padding: '20px', textAlign: 'center' }}>
      <h2 id="titulo-mapa" tabIndex="0">Localização dos Sensores</h2>

      <MapContainer center={position} zoom={16} style={{ height: '500px', width: '100%', maxWidth: '700px', margin: '0 auto', borderRadius: '8px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marcador de exemplo */}
        <Marker position={position}>
          <Popup>
            Sensor de temperatura.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Mapa;
