import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

function BaseMap(props, ref) {
    return (
        <MapContainer
            center={[-51.75, -59.5]}
            doubleClickZoom={false}
            dragging={false}
            ref={ref}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%', position: 'absolute'}}
            zoom={8}
        >
            <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default React.forwardRef(BaseMap)