import './App.css';
import React, {useEffect, useState} from 'react';
import './index.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function App() {

  const position = [51.505, -0.09]
  const [coordinates, setCoordinates] = useState(null)

    useEffect(() => {
      async function fetchData() {
          const response = await fetch('http://127.0.0.1:9906/content/fetch-all')
          if (response.ok) {
              const data = await response.json();
              let positions = []
              data.Records.forEach(record => {
                  if (record.ContentLatitude && record.ContentLongitude) {
                      record.Position = [record.ContentLatitude, record.ContentLongitude]
                      positions.push(record)
                  }
              })
              setCoordinates(positions);
          }
      }
      fetchData();

    }, []);

  return (
          <MapContainer
              center={position}
              zoom={1}
              scrollWheelZoom={true}
              style={{ height: "100vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
              {coordinates &&
                coordinates.map((record) => (
                <Marker position={record.Position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
                ))}
          </MapContainer>
  )
}
