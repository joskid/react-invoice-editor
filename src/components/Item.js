import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display the name, quantity, price, and total price of a single item in the 
 * list of invoice line items.
 * 
 * @param {*} item - A line item.
 * @param {*} removeItem - A callback to remove the line item.
 */
const Item = ({ item, removeItem }) => (
    <React.Fragment>
        <td>
            {item.name}
        </td>
        <td>
            {item.quantity}
        </td>
        <td>
            ${item.price.toFixed(2)}
        </td>
        <td>
            ${item.total.toFixed(2)}
        </td>
        <td>
            <button onClick={() => removeItem(item.id)}>
                Delete
            </button>
        </td>
    </React.Fragment>
);

Item.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default Item;