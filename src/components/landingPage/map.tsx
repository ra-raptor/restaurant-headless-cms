import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
function Map() {
    const markers =  [22.555438, 88.325566]
  return (
    <MapContainer
    style={{ height: "480px", width: "100%" }}
    zoom={16}
    center={[22.555438, 88.325566]}
    
    scrollWheelZoom={true}
  >
    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker key={`marker-${markers[0]}`} position={[22.554946, 88.332788]} />
  </MapContainer>
  )
}

export default Map