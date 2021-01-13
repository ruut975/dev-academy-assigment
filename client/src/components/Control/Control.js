import React from 'react';

import classes from './Control.module.css';

const Control = (props) => {
    return (
            <button className={classes.ControlButton} onClick={props.handleFunc}>{props.title}</button>   
    );
};

export default Control;