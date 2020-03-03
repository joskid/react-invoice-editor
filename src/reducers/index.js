import { combineReducers } from 'redux';
import lineItems from './lineItems';

/**
 * The root reducer. Individual reducers are combined below.
 */
export default combineReducers({
    lineItems
});