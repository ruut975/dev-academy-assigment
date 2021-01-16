import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
import NameListingTable from '../../components/NameListingTable/NameListingTable';
import NameInput from '../../components/NameInput/NameInput';

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

    const findName = (name) => {
        const found = names.find(item => item.name === name);
        return found;
    };

    let table = null;
    let input = null;

    if (names.length) {
        table = <NameListingTable className={classes.Wrapper} nameData={names} sumOfNames={countSumOfNames} />;
        input = <NameInput search={findName} />
    }
    return (
        <Fragment>
            {input}
            {table}
        </Fragment>
    );
};

export default NameLister;


