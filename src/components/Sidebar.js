import React, { useState, useCallback } from 'react'
import {List, ListItem, ListItemText} from '@material-ui/core';

const Sidebar = () => {
    return (
        <List component="ul">
            <ListItem
            key='1'>
                <ListItemText primary="List Item"></ListItemText>
            </ListItem>

            

        </List>
    )

}
export default Sidebar;