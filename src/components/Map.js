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
  const [dM, setDM] = useState(null)
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const updateDM = () => {
    dM ? setDM(null): setDM(<DrawingManager />)
    console.log(dM)
  }
  const displayDM = () => {
    console.log('DISPLAY DM')
    return(
      <DrawingManager />
    )
}

const dmoptions = {
  drawingControl: true,
  drawingControlOptions: {
    position: 'TOP_CENTER'

  }
}
  const renderMap = () => (
    <>
        <div className="treeContainer">
          <SiteTree updateDM={updateDM} dM={dM} displayDM={displayDM}/>
        </div>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          zoom={10}
          center={center}
          onLoad={map => setMyMap(map)}
          // onClick={(e) => addItemIsActive ? onMapClick(e) : null}
          options={options}
        >
          {dM ? <DrawingManager options={options}/> :null}
        </GoogleMap>
        {/* <BasicTree/> */}
    </>
  )

  return isLoaded ? renderMap() : null;
}


export default Map