import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

export default function BaseMap() {
    return (
        <Map 
            center={[-51.75, -59.5]}
            doubleClickZoom={false}
            dragging={false}
            zoom={8}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%', position: 'absolute'}}
        >
            <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </Map>
    )
}