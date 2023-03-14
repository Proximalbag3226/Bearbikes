import React from "react";
import {TileLayer} from 'react-leaflet';
import {Map} from "leaflet/dist/leaflet-src.esm";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
    return (
        <Map center={{lat:'52.6376', lgn:'-1.135171'}} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>
    );
}

export default Mapa;
