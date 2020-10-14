import React, { useState, useCallback } from 'react'
import { GoogleMap, useLoadScript, DrawingManager, Marker} from '@react-google-maps/api'

const polylineOptions = {
    strokeWeight : 50
}

const onPolylineComplete = polyline => {
    console.log(polyline.getPath().getArray().toString())
  }

const DrawingComponent = () => {
    return(
        <DrawingManager onPolylineComplete={onPolylineComplete} options={{polylineOptions}}/>
    )

}
export default DrawingComponent;