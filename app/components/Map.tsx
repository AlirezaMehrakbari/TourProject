import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon, LatLngExpression, LatLngTuple} from "leaflet";
import {useEffect, useState} from "react";

type MapProps = {
    position: LatLngTuple,
    popup: string
}

const Map: React.FC<MapProps> = ({position, popup}) => {
    const [userLocation, setUserLocation] = useState<LatLngExpression>()
    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                setUserLocation([e.latlng.lat, e.latlng.lng]);
            },
        });
        return null;
    };

    const customIcon = new Icon({
        iconUrl: 'https://pixlok.com/wp-content/uploads/2021/02/Map-Location-Icon-SVG.jpg',
        iconSize: [38, 38]
    })
    return (
        <MapContainer className='h-[200px] lg:h-[400px] w-full rounded-[20px]' center={position} zoom={12}
                      zoomControl={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    {popup}
                </Popup>
            </Marker>
            {userLocation &&
                <Marker position={userLocation} icon={customIcon}>
                    <Popup>
                       new
                    </Popup>
                </Marker>
            }
            <LocationFinderDummy/>
        </MapContainer>
    )
}

export default Map
