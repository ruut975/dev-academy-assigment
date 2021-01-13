import React, { Fragment } from 'react';

const Name = (props) => (
    <Fragment>
        <tr>
            <td>{props.name}</td>
            <td>{props.amount}</td>
        </tr>
    </Fragment>
);

export default Name;