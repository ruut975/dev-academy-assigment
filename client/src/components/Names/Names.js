import React, { Fragment } from 'react';
import Name from './Name/Name';

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
        <Fragment>
            {namesArray}    
        </Fragment>
    )
};

export default Names;