import style from "./MapComponent.module.css";
import React, {useEffect, useRef, useState} from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';


const MapComponent: React.FC = () => {


    mapboxgl.accessToken = 'pk.eyJ1Ijoib3NjYXJwYWxpc3NvdCIsImEiOiJja3BwYm5mNTIwMG56Mndtb2lrenVrcWoxIn0.HvwYKSdJZreA4PSf1N2FNA';

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
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