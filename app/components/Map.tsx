import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon, LatLngTuple} from "leaflet";
type MapProps = {
    position : LatLngTuple,
    popup : string
}
const Map : React.FC<MapProps> = ({position,popup}) => {
    const customIcon = new Icon({
        iconUrl:'https://previews.123rf.com/images/i3alda/i3alda1507/i3alda150700014/42832396-map-pointer-with-home-icon-vector.jpg',
        iconSize : [38,38]
    })
  return (
      <MapContainer className='h-[200px] lg:h-[400px] w-full rounded-[20px]' center={position} zoom={15} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
              <Popup>
                  {popup}
              </Popup>
          </Marker>
      </MapContainer>
  )
}

export default Map
