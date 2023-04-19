import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import Principal from '../Componentes/Principal';

function Map() {
  useEffect(() => {
    // Inicializa el mapa en el div con el id "map"
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Agrega la capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Agrega la capa de ruta usando Leaflet Routing Machine
    L.Routing.control({
      waypoints: [
        L.latLng(51.5, -0.1),
        L.latLng(51.5, -0.05),
      ],
      routeWhileDragging: true,
    }).addTo(map);
  }, []);

  return (
    <div>
      <Principal/>
    <div id="map" style={{ height: '500px' }}></div>
    </div>
  );
}

export default Map