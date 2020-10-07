import React, { useState } from 'react'
import { GoogleMap, useLoadScript, DrawingManager } from '@react-google-maps/api'

const libraries = ['drawing']

const Map = () => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 29.972065, lng: -90.111533 });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });


  const renderMap = () => (
        <GoogleMap
          mapContainerStyle={{
            height: "75vh",
            width: "75vw",
            margin: "20px",
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
        >
            <DrawingManager />
        </GoogleMap>
  )

  return isLoaded ? renderMap() : null;
}

export default Map