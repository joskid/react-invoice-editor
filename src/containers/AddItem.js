import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

/**
 * This is a container that handles adding a new line item to the list of 
 * invoice line items. 
 * 
 * @param {*} dispatch - The connection to the actions.
 */
const AddItem = ({ dispatch }) => {

    let name;
    let quantity;
    let price;

    /**
     * Submit the new line item to the list of invoice line items. After the
     * submit, reset each of the input field values.
     * 
     * @param {*} e - The event container.
     */
    const submitItem = (e) => {

        e.preventDefault();

        dispatch(addItem(name.value, quantity.value, price.value));

        name.value = '';
        quantity.value = 0;
        price.value = 0;
    }

    return (
        <form onSubmit={(e) => submitItem(e)}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <input ref={node => name = node} type="text" placeholder="Item" />
                        </td>
                        <td>
                            <input ref={node => quantity = node} type="number" min="1" step="1" placeholder="Quantity" />
                        </td>
                        <td>
                            <input ref={node => price = node} type="number" step="0.01" placeholder="Price" />
                        </td>
                        <td>
                            <button type="submit">
                                Submit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );

};

export default connect()(AddItem);