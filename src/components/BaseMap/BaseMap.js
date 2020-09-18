import React from 'react'
import { Map, TileLayer, withLeaflet } from 'react-leaflet'
import VectorGridDefault from 'react-leaflet-vectorgrid';
import 'leaflet/dist/leaflet.css';

const VectorGrid = withLeaflet(VectorGridDefault);

const options = {
    type: 'protobuf',
    subdomains: 'abcd',
    vectorTileLayerStyles: {
        water: {
            weight: 0,
            fillColor: '#9bc2c4',
            fillOpacity: 1,
            fill: true
        },
        boundary: {
            weight: 0
        },
        transportation: {
            weight: 0
        },
        waterway: {
            weight: 0
        },
        test: {
            weight: 0,
            fillColor: '#00FF00',
            fillOpacity: 1,
            fill: true
        }
    },
    url: 'http://localhost:8080/data/v3/{z}/{x}/{y}.pbf'
}

function BaseMap(props, ref) {
    return (
        <Map 
            center={[-51.75, -59.5]}
            doubleClickZoom={false}
            dragging={false}
            ref={ref}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%', position: 'absolute'}}
            zoom={7}
        >
            <VectorGrid {...options} />
        </Map>
    )
}

export default React.forwardRef(BaseMap)