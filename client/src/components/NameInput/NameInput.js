import React, { useState, Fragment } from 'react';
import { Input } from 'semantic-ui-react';

const NameInput = (props) => {

const [input, setInput] = useState('');

const inputHandler = (e) => {
    setInput(e.target.value)
}

const found = props.search(input);
const result = found ? <p>We found {found.amount} persons with a name of {found.name}</p> : null;

return (
    <Fragment>
    <Input placeholder='Search...' onChange={e => inputHandler(e)}/>
    {result}
    </Fragment>
)
};

export default NameInput;