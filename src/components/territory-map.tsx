'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: () => string })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Coordenadas aproximadas dos municípios
const territories = [
  {
    name: 'Município de Salgado',
    position: [-7.083, -36.85] as [number, number],
    description: 'Território com representatividade do movimento',
  },
  {
    name: 'Vitória da União',
    position: [-6.45, -37.133] as [number, number],
    description: 'Território com representatividade do movimento',
  },
];

// Centro do mapa entre os dois pontos
const centerPosition: [number, number] = [-6.766, -36.991];

export function TerritoryMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={centerPosition}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {territories.map((territory, index) => (
          <Marker key={index} position={territory.position}>
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-base">{territory.name}</h3>
                <p className="text-sm mt-1">{territory.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
