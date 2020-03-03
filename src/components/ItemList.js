import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import * as Constants from '../utils/constants';
import '../styles/ItemList.scss';

/**
 * Display a list of line items within the invoice.
 * 
 * @param {*} lineItems - The line items of the invoice, including totals.
 * @param {*} removeItem - A callback to remove a line item.
 */
class ItemList extends Component {

    /**
     * Render the component.
     */
    render() {
        return (
            <div className="ItemList">
                <table>
                    <thead>
                        <tr>
                            <td width="60%">Item</td>
                            <td width="10%">Quantity</td>
                            <td width="10%">Price</td>
                            <td width="10%">Total</td>
                            <td width="10%">Delete</td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.lineItems.items.map(item =>
                            <tr key={item.id}>
                                <Item {...item} removeItem={() => this.props.removeItem(item.id)} />
                            </tr>
                        )}

                        {(this.props.lineItems.subTotal !== 0) &&
                            <React.Fragment>
                                <tr className="ItemList-summary">
                                    <td colSpan="3">
                                        Subtotal
                                    </td>
                                    <td colSpan="2">
                                        ${this.props.lineItems.subTotal.toFixed(2)}
                                    </td>
                                </tr>
                            </React.Fragment>
                        }

                        {(this.props.lineItems.taxTotal !== 0) &&
                            <React.Fragment>
                                <tr className="ItemList-summary">
                                    <td colSpan="3">
                                        Tax ({Constants.TAX_RATE * 100}%)
                                    </td>
                                    <td colSpan="2">
                                        ${this.props.lineItems.taxTotal.toFixed(2)}
                                    </td>
                                </tr>
                            </React.Fragment>
                        }

                        {(this.props.lineItems.taxTotal !== 0) &&
                            <React.Fragment>
                                <tr className="ItemList-summary">
                                    <td colSpan="3">
                                        Total
                                    </td>
                                    <td colSpan="2">
                                        ${this.props.lineItems.grandTotal.toFixed(2)}
                                    </td>
                                </tr>
                            </React.Fragment>
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

ItemList.propTypes = {
    lineItems: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default ItemList;