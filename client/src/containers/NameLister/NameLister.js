import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import NameListingTable from '../../components/NameListingTable/NameListingTable'

import 'semantic-ui-css/semantic.min.css';

import classes from './NameLister.module.css';

const NameLister = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/names`)
            .then(res => {
                setNames(res.data.names);
                console.log(res.data.names);
            })
            .catch(err => console.log(err));
    }, []);

    const countSumOfNames = () => {
        const numArray = names.map(item => item.amount);
    
        const sum = numArray.reduce((acc, curr) => acc + curr, 0);
        return sum;
    };

    const table = names.length ? <NameListingTable className={classes.Wrapper} nameData={names} sumOfNames={countSumOfNames} /> : null;
    
    return (
        <Fragment>
            {table}
        </Fragment>
    );
};

export default NameLister;


