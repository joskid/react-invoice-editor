import { combineReducers } from 'redux';
import items from './items';

/**
 * The root reducer. Individual reducers are combined below.
 */
export default combineReducers({
    items,
});