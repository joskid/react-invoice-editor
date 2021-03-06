import { ADD_ITEM, REMOVE_ITEM } from '../constants/action-types';

/**
 * Generate an event to add an item to the list of invoice line items.
 * 
 * @param {*} name - The name of the line item.
 * @param {*} quantity - The quantity of units of the line item. 
 * @param {*} price - The unit price of the line item.
 */
export const addItem = (name, quantity, price) => ({
    type: ADD_ITEM,
    payload: {
        name,
        quantity,
        price
    }
});

/**
 * Generate an event to remove an item from the list of invoice line items.
 * 
 * @param {*} id - The ID of the line item.
 */
export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: {
        id
    }
});