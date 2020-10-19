import React, { useState, useCallback } from 'react'
import { GoogleMap, useLoadScript, DrawingManager, Marker} from '@react-google-maps/api'

// icon: {
//     path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
//     fillColor: '#FF0000',
//     fillOpacity: 0.6,
//     anchor: new google.maps.Point(0, 0),
//     strokeWeight: 0,
//     scale: 1

const options = {
    polylineOptions : {
        strokeWeight : 10,
        editable : true,
    },
    markerOptions : {
        title: "Hello",
        label: "hi",
        icon: {
            url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
    }

}

const onPolylineComplete = polyline => {
    console.log(polyline.getPath().getArray().toString())
}

const onMarkerComplete = marker => {
    console.log("(" + marker.position.lat() + "," + marker.position.lng() + ")")
}
const onOverlayComplete = e => {
    console.log(e)
}

const DrawingComponent = () => {
    return(
        <DrawingManager onOverlayComplete={onOverlayComplete} onPolylineComplete={onPolylineComplete} onMarkerComplete={onMarkerComplete} options={{options}}/>
    )

}
export default DrawingComponent;