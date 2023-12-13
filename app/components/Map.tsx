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
    useEffect(() => {
        console.log(userLocation)
    }, [userLocation])
    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                setUserLocation([e.latlng.lat, e.latlng.lng]);
            },
        });
        return null;
    };

    const customIcon = new Icon({
        iconUrl: 'https://previews.123rf.com/images/i3alda/i3alda1507/i3alda150700014/42832396-map-pointer-with-home-icon-vector.jpg',
        iconSize: [38, 38]
    })
    return (
        <MapContainer className='h-[200px] lg:h-[400px] w-full rounded-[20px]' center={position} zoom={15}
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
