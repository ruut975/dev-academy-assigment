import React from 'react';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_SORT':
            if (state.column === action.column) {
                return {
                    ...state,
                    data: state.data.slice().reverse(),
                    direction: state.direction === 'ascending' ? 'descending' : 'ascending',
                }
            }

    return {
        column: action.column,
        data: _.sortBy(state.data, [action.column]),
        direction: 'ascending',
    }
    default:
        throw new Error();
    }
};

const NameListingTable = (props) => {
    const [state, dispatch] = React.useReducer(reducer, {
        column: null,
        data: props.nameData,
        direction: null,
    });
    const { column, data, direction } = state;

    return (
    <Table sortable celled fixed>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell
                sorted={column === 'name' ? direction : null}
                onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}>Name</Table.HeaderCell>
            <Table.HeaderCell
                sorted={column === 'amount' ? direction : null}
                onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'amount' })}>Amount</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {data.map(({ name, amount }) => (
            <Table.Row key={name}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{amount}</Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>

        <Table.Footer>
        <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell>Sum: {props.sumOfNames}</Table.Cell>
        </Table.Row>
        </Table.Footer>
    </Table>
    )
}


export default NameListingTable;
