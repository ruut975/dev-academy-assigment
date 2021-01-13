import React from 'react';

import classes from './Name.module.css';

const Name = (props) => (
    <div className={classes.Wrapper}>
        <div className={classes.Item}>{props.name}</div>
        <div className={classes.Item}>{props.amount}</div>
    </div>
);

export default Name;