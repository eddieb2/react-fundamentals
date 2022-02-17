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

// Exercise
const smallBox = (
	<div
		className='box box--small'
		style={{ background: 'lightblue', fontStyle: 'italic' }}
	>
		small lightblue box
	</div>
);

const mediumBox = (
	<div
		className='box box--medium'
		style={{ background: 'pink', fontStyle: 'italic' }}
	>
		medium pink box
	</div>
);

const largeBox = (
	<div
		className='box box--large'
		style={{ background: 'orange', fontStyle: 'italic' }}
	>
		large orange box
	</div>
);

// EXTRA CREDIT #1
// create a function that takes params, gives these params to JSX and returns a custom component
let Box = ({ children, classname, styles }) => {
	return (
		<div className={classname} style={{ styles, ...styles }}>
			{children}
		</div>
	);
};

// EXTRA CREDIT #2
// append the 'size' prop to the variable classname to apply the appropriate additional class
let Box1 = ({ children, size, styles }) => {
	let classname = 'box';

	if (size) {
		classname = `${classname} box--${size}`;
	}

	return (
		<div className={classname} style={styles}>
			{children}
		</div>
	);
};

function App() {
	return (
		<div>
			<Box
				children={'TEST -- small red Box'}
				styles={{ background: 'red', fontStyle: 'italic' }}
				classname={'box box--small'}
			/>
			<Box1 children={'TEST -- extra credit 2'} size='small' />
			{smallBox}
			{mediumBox}
			{largeBox}
		</div>
	);
}

export default App;
