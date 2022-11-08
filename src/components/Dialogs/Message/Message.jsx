import React from 'react';
import classes from '../Dialogs.module.css';


const Message = function (props) {
    return (
        <div className={classes.meggaseItem}>
            {props.text}
        </div>
    )
}

export default Message