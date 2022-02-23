// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import '../box-styles.css';

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// EXTRA CREDIT #1
// create a function that takes params, gives these params to JSX and returns a custom component
// let Box = ({ children, classname, styles }) => {
// 	return (
// 		<div className={classname} style={{ styles, ...styles }}>
// 			{children}
// 		</div>
// 	);
// };

// EXTRA CREDIT #2
// append the 'size' prop to the variable classname to apply the appropriate additional class
// let Box1 = ({ children, size, styles }) => {
// 	let classname = 'box';

// 	if (size) {
// 		classname = `${classname} box--${size}`;
// 	}

// 	return (
// 		<div className={classname} style={styles}>
// 			{children}
// 		</div>
// 	);
// };

// NOTE extra credit #1 correct
let Box = ({ className = '', styles, ...otherProps }) => {
	return (
		<div
			className={`box ${className}`}
			styles={{ ...styles }}
			{...otherProps}
		/>
	);
};

//NOTE extra credit #2 correct
let BoxExtra = ({ size = '', ...otherProps }) => {
	return (
		<div
			className={`box ${size ? 'box--' + size : ''}`}
			{...otherProps}
		/>
	);
};

// Exercise
const smallBox = (
	<BoxExtra
		// className='box--small'
		size='small'
		style={{ background: 'lightblue', fontStyle: 'italic' }}
	>
		small lightblue box
	</BoxExtra>
);

const mediumBox = (
	<Box
		className='box--medium'
		style={{ background: 'pink', fontStyle: 'italic' }}
	>
		medium pink box
	</Box>
);

const largeBox = (
	<Box
		className='box--large'
		style={{ background: 'orange', fontStyle: 'italic' }}
	>
		large orange box
	</Box>
);

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
		</div>
	);
}

export default App;
