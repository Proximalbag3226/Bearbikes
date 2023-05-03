import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Principal from '../Componentes/Principal';

function Map() {
  useEffect(() => {
    // Inicializa el mapa en el div con el id "map"
    const map = L.map('map').setView([19.42847, -99.12766], 13);

    // Agrega la capa de mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // Agrega la capa de ruta usando Leaflet Routing Machine
    L.Routing.control({
      waypoints: [
        L.latLng(19.452147, -99.1747),
        L.latLng(19.4521, -99.17)
      ],
      language: 'es',
      geocoder: L.Control.Geocoder.nominatim(),
      routeWhileDragging: false,
      reverseWaypoints: true,
      showAlternatives: true,
      lineOptions: {
        styles: [{
          color: 'red',
          opacity: 1,
          weight: 10
        }]
      },
      altLineOptions: {
        styles: [
          { color: 'black', opacity: 0.15, weight: 9 },
          { color: 'white', opacity: 0.8, weight: 6 },
          { color: 'blue', opacity: 0.5, weight: 2 }
        ]
      },
      profile : 'cycling'
    }).addTo(map);
  }, []);

  return (
    <div>
      <Principal/>
      <h1 className='titulo'>Rutas</h1>
    <div id="map" style={{ height: '500px' }}></div>
    </div>
  );
}

export default Map