import React from 'react';
import AddItem from '../containers/AddItem';
import ItemList from '../containers/ItemList';
import '../styles/App.scss';

/**
 * The main parent component of the React Invoice Editor application.
 */
const App = () => (
    <div className="App">

        <div className="App-container">

        <h1>React Invoice Editor</h1>

        <ItemList />
        <AddItem />

        </div>

    </div>
);

export default App;