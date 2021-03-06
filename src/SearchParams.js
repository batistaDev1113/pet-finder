import React from 'react';
import { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
	const [
		location,
		setLocation
	] = useState('Seattle, WA');

	const [
		animal,
		setAnimal
	] = useState('dog');

	return (
		<div className='search-params'>
			<form>
				<label htmlFor='location'>
					Location{' '}
					<input
						id='location'
						value={location}
						placeholder='Location'
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>
				<label htmlFor='animal'>
					Animal
					<select
						id='animal'
						value={animal}
						onChange={(e) => setAnimal(e.target.value)}
						onBlur={(e) => e.target.value}
					>
						<option>All</option>
						{ANIMALS.map((animal) => {
							return (
								<option key={animal} value={animal}>
									{animal}
								</option>
							);
						})}
					</select>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SearchParams;
