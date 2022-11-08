import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';



const DialogItem = function (props) {
    return (
        <div><NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? classes.activeDialogItem : classes.dialogItem}>{props.name}</NavLink></div>
    )
}


export default DialogItem