import React, { useState, useCallback } from 'react'
import { GoogleMap, useLoadScript, DrawingManager, Marker} from '@react-google-maps/api'
import CBTree from './CBTree'

const libraries = ['drawing']
const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const Map = () => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 39.9526, lng: -75.1652 });
  // const [ markers, setMarkers ] = useState([]);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

    
  const renderMap = () => (
    <>
        <div className="treeContainer">
          <CBTree/>
        </div>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
          options={options}
        >
            {/* <DrawingComponent/> */}
        </GoogleMap>
    </>
  )

  return isLoaded ? renderMap() : null;
}


export default Map