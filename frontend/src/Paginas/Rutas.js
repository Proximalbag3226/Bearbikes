import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Principal from '../Componentes/Principal';
import { useState } from 'react';

export function Map() {
  const position = [19.42847, -99.12766];
  const [route, setRoute] = useState([]);

  const customIcon = new Icon({
    iconUrl: '/icons8-select-24.png',
    iconSize: [20, 20],
  });

  const handleMapClick = (e) => {
    const { latlng } = e;
    setRoute((prevRoute) => [...prevRoute, latlng]);
  };

  return (
      <div>
        <Principal />
        <section className='map-component'>
          <div className='map'>
            <MapContainer center={position} zoom={14} scrollWheelZoom={true} onClick={handleMapClick}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>🐻🍻🎉</Popup>
              </Marker>
              <Polyline pathOptions={{ color: 'red' }} positions={route} />
            </MapContainer>
          </div>
        </section>
      </div>
  );
}

export default Map;
