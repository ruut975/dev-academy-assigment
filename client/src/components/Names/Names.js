import React from 'react';
import Name from './Name/Name';

import classes from './Names.module.css';

const Names = (props) => {

let namesArray = <p style={{textAlign: 'center'}}>Something went wrong</p>
    namesArray = props.names.map(item => {
    return (
        <Name
            key={item.name}
            name={item.name}
            amount={item.amount} 
            // {...props}
                />
    );
});  

    return (
        <div>
            <section className={classes.Names}>
                {namesArray}
            </section>
        </div>
    )
};

export default Names;