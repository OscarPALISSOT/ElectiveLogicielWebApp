import style from "./MapComponent.module.css";
import React, {useEffect, useRef} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';

interface MapComponentProps {
    lng: number;
    lat: number;
    zoom: number;
}
const MapComponent: React.FC<MapComponentProps> = ({ lng, lat, zoom}:MapComponentProps) => {


    mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXJwYWxpc3NvdCIsImEiOiJja3BwYm5mNTIwMG56Mndtb2lrenVrcWoxIn0.HvwYKSdJZreA4PSf1N2FNA';

    const mapContainer = useRef(null);

    useEffect(() => {

        const node = mapContainer.current;
        // if the window object is not found, that means
        // the component is rendered on the server
        // or the dom node is not initialized, then return early
        if (typeof window === 'undefined' || node === null) return;

        new mapboxgl.Map({
            container: node,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <>
            <div ref={mapContainer} className={style.map}/>
        </>
    )
}


export default MapComponent;