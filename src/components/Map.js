import React, { useState, useCallback } from 'react'
import { GoogleMap, useLoadScript, DrawingManager, Marker} from '@react-google-maps/api'
import SiteTree from './SiteTree'
import BasicTree from './BasicTree'
import MapItem from './MapItem'

const libraries = ['drawing']
const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

const Map = () => {
  const [ myMap, setMyMap ] = useState(null);
  const [ center, setCenter ] = useState({ lat: 39.9526, lng: -75.1652 });
  const [markers, setMarkers] = React.useState([]);
  const [addItemIsActive, setAddItemIsActive] = useState(false)
  
  const onMapClick = useCallback((e) => {
    console.log('MAP CLICKED FOR MARKER')
      setMarkers((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date(),
        },
      ]
      );
      console.log(markers)
    }, [markers]);

  const updateAddItemIsActive = (addItemIsActive) => {
    console.log('ITEM ADD IS NOW ACTIVE')
    setAddItemIsActive(!addItemIsActive)
  }


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
    
  const renderMap = () => (
    <>
        <div className="treeContainer">
          <SiteTree addItemIsActive={addItemIsActive} updateAddItemIsActive={updateAddItemIsActive}/>
        </div>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
          onClick={(e) => addItemIsActive ? onMapClick(e) : null}
          options={options}
        >
            {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
        </GoogleMap>
        {/* <BasicTree/> */}
    </>
  )

  return isLoaded ? renderMap() : null;
}


export default Map