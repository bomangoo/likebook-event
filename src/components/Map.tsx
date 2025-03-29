import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useCallback } from 'react';

interface MapProps {
    containerStyle: { width: string; height: string };
    position: { lat: number; lng: number };
    zoom: number;
}
export default function Map(props: MapProps) {
    const { containerStyle, position, zoom = 16 } = props;

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GOOGLE_MAP_KEY ?? '',
    });

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback(
        function callback(map: google.maps.Map) {
            const bounds = new window.google.maps.LatLngBounds(position);
            map.fitBounds(bounds);
            map.setZoom(zoom);

            setMap(map);
        },
        [containerStyle, position, zoom]
    );

    const OPTIONS = {
        minZoom: 4,
        maxZoom: 16,
    };

    const onUnmount = useCallback(function callback(map: any) {
        setMap(null);
    }, []);

    return (
        <div>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={position}
                    zoom={zoom}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    options={OPTIONS}
                >
                    <Marker position={position} />
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
}
