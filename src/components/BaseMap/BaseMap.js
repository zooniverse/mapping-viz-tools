import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components'

const Relative = styled.div`
    position: relative;
    width: 100%;
`

export default function BaseMap() {
    return (
        <Relative>
            <Map 
                center={[-51.75, -59.5]} 
                zoom={8} 
                style={{ width: '100%', height: '100%', position: 'absolute'}}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        </Relative>
    )
}