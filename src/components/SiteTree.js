import React, {useState, useEffect} from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import MapItem from './MapItem'

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const nodes1 = [
    {
        value: 'Site1',
        label: 'Site1',
        data: {info: 'CoolBeans'},
        children: [
            {
                value: '+',
                label: '+',
                icon: <FontAwesomeIcon icon={faHome} />,
                disabled: true,
            },
            {
                value: 'Trench',
                label: 'Trench',
                icon: <i className="far fa-file-pdf" />,
            },
            {
                value: 'Tools1',
                label: 'Tools',
                data: {info: 'CoolBeans'},
                icon: <i className="far fa-file-alt" />,
            },
        ],
    },
    {
        value: 'Site2',
        label: 'Site2',
        children: [
            {
                value: 'Tools2',
                label: 'Tools',
                icon: <i className="fa fa-file-image-o" />,
            },
            {
                value: 'Mods',
                label: 'Mods',
                icon: <i className="fa fa-file-image-o" />,
            },
        ],
    },
];

const SiteTree = ({addItemIsActive, updateAddItemIsActive}) => {
    const [nodes, setNodes] = useState(nodes1)
    const [checked, setChecked] = useState(['Mods'])
    const [expanded, setExpanded] = useState([])
    const [addItem, setAddItem] = useState(false)
    const [target, setTarget] = useState('')

    const onCheck = (checked) => {
        setChecked(checked);
        // console.log(checked)
    }

    const onExpand = (expanded) => {
        setExpanded(expanded);
        // console.log(expanded)
    }
    const onClick = (e) => {
        console.log(e)
        console.log(e['data'])
        if (e.value === '+'){
            updateAddItemIsActive(!addItem)
            setAddItem(!addItem)
            setTarget(e)
            // return addItem ? renderAddItem() : null
            // let newNode = {
            //     value: 'NEWTHING',
            //     label: 'newThing',
            //     data: {info: 'CoolBeans'},
            //     icon: <FontAwesomeIcon icon={faHome} />,
            // }
            // setNodes(nodes.map(item => 
            //     item.children === e.parent.children
            //     ? {...item, children : e.parent.children.concat(newNode)} 
            //     : item
            //     )); 
      }
    }

    const updateNodes = (newNodes) =>{
        setNodes(newNodes)
    }

    const renderAddItem = () => (
        <div className="itemAdditionContainer">
            {console.log('renderedItem')}
            <MapItem />
        </div>
    )

    return (
        <>
        <CheckboxTree
            checked={checked}
            expanded={expanded}
            iconsClass="fa5"
            nodes={nodes}
            onCheck={onCheck}
            onExpand={onExpand}
            onClick={onClick}
        >
        </CheckboxTree>
        <div>
            <MapItem isRendered={addItem} mynodes={nodes} target={target} updateNodes={updateNodes}/>
        </div>
  
        </>
    );
}


export default SiteTree;