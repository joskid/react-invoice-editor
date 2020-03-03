import React from 'react';
import PropTypes from 'prop-types';
import Item from '../containers/Item';

/**
 * Display a list of line items within the invoice.
 * 
 * @param {*} items - The array list of line items. 
 */
const ItemList = ({ items }) => (
    <table>
        <thead>
            <tr>
                <td>Item</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Total</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {items.map(item =>
                <tr key={item.id}>
                    <Item {...item} />
                </tr>
            )}
        </tbody>
    </table>
);

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
    }).isRequired).isRequired,
};

export default ItemList;