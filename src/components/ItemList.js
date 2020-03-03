import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/index';
import { TAX_RATE } from '../constants/tax-rates';
import '../styles/ItemList.scss';

/**
 * Display a list of line items within the invoice.
 */
class List extends Component {

    /**
     * Render the component.
     */
    render() {

        return (
            <div className="ItemList">

                {this.props.items.length > 0 &&
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

                            {this.props.items.map(item =>
                                <tr key={item.id}>
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
                                        <button onClick={() => this.props.removeItem(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}


                            <tr className="ItemList-summary">
                                <td colSpan="3">
                                    Subtotal
                                </td>
                                <td colSpan="2">
                                    ${this.props.subTotal.toFixed(2)}
                                </td>
                            </tr>


                            <tr className="ItemList-summary">
                                <td colSpan="3">
                                    Tax ({TAX_RATE * 100}%)
                                </td>
                                <td colSpan="2">
                                    ${this.props.taxTotal.toFixed(2)}
                                </td>
                            </tr>


                            <tr className="ItemList-summary">
                                <td colSpan="3">
                                    Total
                                </td>
                                <td colSpan="2">
                                    ${this.props.grandTotal.toFixed(2)}
                                </td>
                            </tr>

                        </tbody>
                    </table>
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.items,
        subTotal: state.subTotal,
        taxTotal: state.taxTotal,
        grandTotal: state.grandTotal
    };
};

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);