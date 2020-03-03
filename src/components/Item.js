import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display the name, quantity, price, and total price of a single item in the 
 * list of invoice line items.
 * 
 * @param {*} item - A line item.
 * @param {*} removeItem - A callback to remove the line item.
 */
const Item = ({ name, quantity, price, total, removeItem }) => (
    <React.Fragment>
        <td>
            {name}
        </td>
        <td>
            {quantity}
        </td>
        <td>
            ${price.toFixed(2)}
        </td>
        <td>
            ${total.toFixed(2)}
        </td>
        <td>
            <button onClick={removeItem}>
                Delete
            </button>
        </td>
    </React.Fragment>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default Item;