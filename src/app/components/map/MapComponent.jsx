"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Dynamically import react-leaflet components
const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const MapComponent = () => {
  const position = [-38.1167561, 144.3444115]; // Coordinates for the marker

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require("leaflet");
      const DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;
    }
  }, []);

  return (
    <Map center={position} zoom={15} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Cutting+Edge+Correction/@-38.1167031,144.3417704,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad4118fa7bfd889:0x19eba5f83ed455b3!8m2!3d-38.1167031!4d144.3443453!16s%2Fg%2F11pwphknv6?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          >
            <strong>Cutting Edge Correction</strong>
          </a>
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapComponent;
