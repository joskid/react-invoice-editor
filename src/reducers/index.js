import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM, REMOVE_ITEM } from '../constants/action-types';
import { TAX_RATE } from '../constants/tax-rates';

const initialState = {
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
function rootReducer(state = initialState, action) {

    if (action.type === ADD_ITEM) {

        // Update the invoice line items
        const items = [...state.items, {
            id: uuidv4(),
            name: action.payload.name,
            quantity: parseInt(action.payload.quantity),
            price: parseFloat(action.payload.price),
            total: parseFloat(parseInt(action.payload.quantity) * action.payload.price),
        }];

        // Update the invoice totals
        const subTotal = items.reduce((subTotal, item) => (subTotal += item.total), 0);
        const taxTotal = subTotal * TAX_RATE;
        const grandTotal = subTotal + taxTotal;

        return {
            items,
            subTotal,
            taxTotal,
            grandTotal,
        };
    }

    if (action.type === REMOVE_ITEM) {

        // Update the invoice line items
        const items = state.items.filter(item => item.id !== action.payload.id);

        // Update the invoice totals
        const subTotal = items.reduce((subTotal, item) => (subTotal += item.total), 0);
        const taxTotal = subTotal * TAX_RATE;
        const grandTotal = subTotal + taxTotal;

        return {
            items,
            subTotal,
            taxTotal,
            grandTotal
        };
    }

    return state;
};

export default rootReducer;