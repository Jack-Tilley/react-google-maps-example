import React, { useState, useCallback } from 'react'
import { GoogleMap, useLoadScript, DrawingManager, Marker} from '@react-google-maps/api'


const libraries = ['drawing']

const Map = () => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 29.972065, lng: -90.111533 });
  const [ markers, setMarkers ] = useState([]);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const onMapClick = useCallback((e) => {
    setMarkers(current => [...current, {
        lat: e.latLng.lat(),
        lng : e.latLng.lng(),
        time : new Date()
    }])
  }, [])
    

  const renderMap = () => (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%"
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
          onClick={onMapClick}
        >
            {markers.map((marker => (<Marker 
              key={marker.time.toISOString()} 
              position={{lat: marker.lat, lng: marker.lng}}     
              />
            )))};
            <DrawingManager />
        </GoogleMap>
  )

  return isLoaded ? renderMap() : null;
}

export default Map