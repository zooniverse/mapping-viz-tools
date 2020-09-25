import React from 'react'
import { Map, withLeaflet } from 'react-leaflet'
import VectorGridDefault from 'react-leaflet-vectorgrid';
import 'leaflet/dist/leaflet.css';

const VectorGrid = withLeaflet(VectorGridDefault);

const options = {
    type: 'protobuf',
    subdomains: 'abcd',
    vectorTileLayerStyles: {
        water: {
            weight: 0,
            fillColor: 'white',
            fillOpacity: 1,
            fill: true
        },
        place: {
            weight: 0
        },
        transportation: {
            weight: 0
        },
        test: {
            weight: 0,
            fillColor: 'green',
            fillOpacity: 1,
            fill: true
        }
    },
    url: 'https://zoomapper-staging.zooniverse.org/data/falklands/{z}/{x}/{y}.pbf'
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