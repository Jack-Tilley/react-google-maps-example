import React, {useState} from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nodes = [
    {
        value: 'Site1',
        label: 'Site1',
        children: [
            {
                value: 'Fence',
                label: 'Fence',
                icon: <FontAwesomeIcon icon={faHome} />,
            },
            {
                value: 'Trench',
                label: 'Trench',
                icon: <i className="far fa-file-pdf" />,
            },
            {
                value: 'Tools1',
                label: 'Tools',
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

const CBTree = () => {
    const [checked, setChecked] = useState(['Mods'])
    const [expanded, setExpanded] = useState([])

    const onCheck = (checked) => {
        setChecked(checked);
    }

    const onExpand = (expanded) => {
        setExpanded(expanded);
    }
    return (
        <CheckboxTree
            checked={checked}
            expanded={expanded}
            iconsClass="fa5"
            nodes={nodes}
            onCheck={onCheck}
            onExpand={onExpand}
            
        />
    );
}


export default CBTree;