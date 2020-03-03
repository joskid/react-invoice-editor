import * as actions from './index';
import { ADD_ITEM, REMOVE_ITEM } from '../constants/action-types';

describe('item actions', () => {
    
    it('addItem should create an ADD_ITEM action', () => {
        expect(actions.addItem('Filing Cabinet', 3, 39.99)).toEqual({
            type: ADD_ITEM,
            payload: {
                name: 'Filing Cabinet',
                quantity: 3,
                price: 39.99
            }
        });
    });

    it('removeItem should create a REMOVE_ITEM action', () => {
        expect(actions.removeItem('123')).toEqual({
            type: REMOVE_ITEM,
            payload: {
                id: '123'
            }
        })
    });

});