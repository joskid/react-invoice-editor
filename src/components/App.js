import React from 'react';
import AddItem from '../containers/AddItem';
import ItemList from '../containers/ItemList';

/**
 * The main parent component of the React Invoice Editor application.
 */
const App = () => (
    <div>
        <ItemList />
        <AddItem />
    </div>
);

export default App;