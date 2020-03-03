import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actions/actionTypes';

/**
 * Handle actions/events related to the invoice line items.
 * 
 * @param {*} state - The default state.
 * @param {*} action - The action/event to handle. 
 */
const items = (state = [], action) => {

    switch (action.type) {

        // Add an item to the list of invoice line items
        case actionTypes.ADD_ITEM:

            return [
                ...state,
                {
                    id: uuidv4(),
                    name: action.name,
                    quantity: parseInt(action.quantity),
                    price: parseFloat(action.price),
                    total: parseFloat(parseInt(action.quantity) * action.price),
                }
            ];

        // Remove an item from the list of invoice line items
        case actionTypes.REMOVE_ITEM:

            let currentItems = [...state];
            let updatedItems = currentItems.filter(item => item.id !== action.id);

            return updatedItems;

        default:

            return state;

    }
};

export default items;