// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import { useRef, useState, useEffect } from 'react';

function UsernameForm({ onSubmitUsername }) {
	// NOTE extra credit #2
	// const [error, setError] = useState();
	// NOTE extra credit #3
	const [userName, setuserName] = useState('');

	// NOTE extra credit #1
	const inputRef = useRef(null);

	// NOTE extra credit #2 & #3
	const handleChange = (e) => {
		// NOTE extra credit #2
		// const isValid =
		// 	e.target.value === e.target.value.toLowerCase();
		// setError(isValid ? null : 'Username must be lower case.');

		// NOTE extra credit #3
		setuserName(e.target.value.toLowerCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// NOTE exercise
		// console.log(e.target.elements.username.value);
		// let val = e.target.elements.username.value;
		// onSubmitUsername(val)

		// NOTE extra credit #1
		// onSubmitUsername(inputRef.current.value);

		// NOTE extra credit #3
		onSubmitUsername(userName);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='username'>Username:</label>
				<input
					ref={inputRef}
					// NOTE extra credit #3
					value={userName}
					id='username'
					type='text'
					onChange={handleChange}
				/>
			</div>
			<button type='submit'>Submit</button>

			{/* // NOTE extra credit #2 */}
			{/* {!error ? (
				<button type='submit'>Submit</button>
			) : (
				<div>
					<button type='submit' disabled>
						Submit
					</button>
					<div role='alert'>{error}</div>
				</div>
			)} */}
		</form>
	);
}

function App() {
	const onSubmitUsername = (username) =>
		alert(`You entered: ${username}`);
	return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
