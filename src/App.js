import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import Pet from './Pet';

const App = () => {
	return (
		<React.StrictMode>
			<h1 id='something-important'>Adopt Me!</h1>
			<SearchParams />
			<Pet name='Togo' breed='French Bulldog' animal='dog' />
		</React.StrictMode>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
