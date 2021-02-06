import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function Pet({ name, animal, breed }) {
	return (
		<React.StrictMode>
			<h1>Name: {name}</h1>
			<h2>Animal: {animal}</h2>
			<h2>Breed: {breed}</h2>
		</React.StrictMode>
	);
}

Pet.propTypes = {
	name: PropTypes.string,
	animal: PropTypes.string,
	breed: PropTypes.string
};
