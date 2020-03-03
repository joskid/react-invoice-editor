import React from 'react';
import PropTypes from 'prop-types';
import Item from '../containers/Item';
import * as Constants from '../util/constants';

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

            {items.items.map(item =>
                <tr key={item.id}>
                    <Item {...item} />
                </tr>
            )}

            <tr>
                <td colSpan="3">
                    Subtotal
                </td>
                <td>
                    ${items.subTotal.toFixed(2)}
                </td>
            </tr>

            <tr>
                <td colSpan="3">
                    Tax ({Constants.TAX_RATE * 100}%)
                </td>
                <td>
                    ${items.taxTotal.toFixed(2)}
                </td>
            </tr>

            <tr>
                <td colSpan="3">
                    Total
                </td>
                <td>
                    ${items.grandTotal.toFixed(2)}
                </td>
            </tr>

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