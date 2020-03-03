import React from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import '../styles/App.scss';

/**
 * The main parent component for the React Invoice Editor application.
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