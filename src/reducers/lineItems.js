import { v4 as uuidv4 } from 'uuid';
import * as ActionTypes from '../actions/actionTypes';
import * as Constants from '../utils/constants';

const INITIAL_STATE = {
    items: [],
    subTotal: 0,
    taxTotal: 0,
    grandTotal: 0
};

/**
 * Handle actions/events related to the invoice line items.
 * 
 * @param {*} state - The default state.
 * @param {*} action - The action/event to handle. 
 */
const lineItems = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        // Add an item to the list of invoice line items
        case ActionTypes.ADD_ITEM: {

            // Update the invoice line items
            const items = [...state.items, {
                id: uuidv4(),
                name: action.name,
                quantity: parseInt(action.quantity),
                price: parseFloat(action.price),
                total: parseFloat(parseInt(action.quantity) * action.price),
            }];

            // Update the invoice totals
            const subTotal = items.reduce((subTotal, item) => (subTotal += item.total), 0);
            const taxTotal = subTotal * Constants.TAX_RATE;
            const grandTotal = subTotal + taxTotal;

            return {
                items,
                subTotal,
                taxTotal,
                grandTotal,
            };
        }

        // Remove an item from the list of invoice line items
        case ActionTypes.REMOVE_ITEM: {

            // Update the invoice line items
            const items = state.items.filter(item => item.id !== action.id);

            // Update the invoice totals
            const subTotal = items.reduce((subTotal, item) => (subTotal += item.total), 0);
            const taxTotal = subTotal * Constants.TAX_RATE;
            const grandTotal = subTotal + taxTotal;

            return {
                items,
                subTotal,
                taxTotal,
                grandTotal
            };
        }

        default: {

            return state;

        }

    }
};

export default lineItems;