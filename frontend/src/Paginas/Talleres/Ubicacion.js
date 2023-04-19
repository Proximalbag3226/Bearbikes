import '../../CSS/index.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export function Ubicacion(props){

    const position = [19.443876740696666, -99.17962725340328];
    return (
        <div>
            <div className="textito">
                <p style={{color: "white",
                    textAlign: "center",
                    fontSize: "40px",
                    fontFamily: 'Oranienbaum',}}>{props.lugar}</p>
                    <section className='map-component'>
          <div className='map' style={{marginLeft: '-6%'}}>
            <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={position}>
                <Popup>
                <p>Aqui se encuentra el Taller</p>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
            </div>
            <div className="imagenes">
                <figure>
                    <img src={require(`../../IMG/${props.img1}.jpg`)}/>
                    <br/><br/><br/><br/>
                    <img src={require(`../../IMG/${props.img2}.jpg`)}/>
                    <br/><br/><br/><br/><br/>
                    <img src={require(`../../IMG/${props.img3}.jpg`)}/>
                </figure>
            </div>
        </div>
    );
}

export default Ubicacion