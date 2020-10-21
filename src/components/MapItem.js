import React, {useState, useEffect} from 'react';
import { Marker } from '@react-google-maps/api'

const MapItem = ({isRendered=false, mynodes, target, updateNodes}) => {
    const [itemType, setItemType] = useState()
    const [name, setName] = useState('')
    
    const addItem = () => {
        let newNode = {
                value: name,
                label: name,
                data: {info: itemType},
                // icon: <FontAwesomeIcon icon={faHome} />,
        }
        
        updateNodes(mynodes.map(item => 
            item.children === target.parent.children
            ? {...item, children : target.parent.children.concat(newNode)} 
            : item
        )); 
        console.log('node added')
    }

    const handleSubmitMarker = () => {
        setItemType('marker')
        addItem()

    }

    const handleSubmitPolyline = () => {
        // e.preventDefault()

    }

    return(
        isRendered ?
      <div className="itemAdditionContainer">
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <button onClick={handleSubmitMarker}>MARKER</button>
        <button onClick={handleSubmitPolyline}>POLYLINE</button>
      </div>
      : null
    )
}
export default MapItem