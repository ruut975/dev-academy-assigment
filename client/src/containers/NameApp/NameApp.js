import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import Names from '../../components/Names/Names';
import Control from '../../components/Control/Control';

import './NameApp.css';

const NameApp = () => {
    const [names, setNames] = useState([]);
    const [sortedNames, setSortedNames] = useState([]);
    const [orderByAmount, setOrderByAmount] = useState(false);
    const [orderByName, setOrderByName] = useState(false);


    useEffect(() => {
        axios.get(`${API_URL}/names`)
            .then(res => {
                setNames(res.data.names);
                console.log(res.data.names);
            })
            .catch(err => console.log(err));
    }, []);

    const orderByAmountHandler = () => {
        setOrderByAmount(!orderByAmount);
    };

    const orderByNameHandler = () => {
        setOrderByName(!orderByName);
    };

    let orderedNames = names;

    if (orderByAmount) {
        const namesCopy = [...names];
        const sorted = namesCopy.sort((a, b) => b.amount - a.amount);
        orderedNames = sorted;
    }

    const nameApp = (
         <table className="Table">
         <thead>
             <tr>
                <th><Control 
                    handleFunc={orderByNameHandler}
                    title="From A-Z" />
                </th>
                <th> <Control 
                    handleFunc={orderByAmountHandler}
                    title="Order By Amount" />
                </th>
            </tr>
         </thead>
         <tbody>
             <tr>
                <td><strong>Name</strong></td>
                <td><strong>Amount</strong></td>
            </tr>
            <Names names={orderedNames} />
         </tbody>
         <tfoot>
             <tr>
                 <td></td>
                 <td>Sum:</td>
             </tr>
         </tfoot>
     </table>
    );

    return (
        <Fragment>
            {nameApp}
        </Fragment>
    );
};

export default NameApp;


