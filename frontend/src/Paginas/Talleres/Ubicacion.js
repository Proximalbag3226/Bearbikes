import '../../CSS/index.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

import marcador2 from '../../IMG/marcador2.png'

export function Ubicacion(props) {

    const customMarkerIcon = new L.Icon({
        iconUrl: marcador2,
        iconRetinaUrl: marcador2,
        iconSize: new L.Point(65, 75),
    });

    return (
                <MapContainer center={props.coordinates} zoom={14} scrollWheelZoom={true} style={{zIndex:'-1', display: 'block'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker icon={customMarkerIcon} position={props.coordinates} >
                        <Popup className='popup'>
                            <h4>{props.lugar}</h4>
                            <p>Esta es la ubicación del taller</p>
                        </Popup>
                    </Marker>
                </MapContainer>
    );
}

export default Ubicacion