import React from 'react';
import './edit.css';

const Edit = ({ textValue, setTextValue }) => {
	return (
		<div>
			<h1>Edit</h1>
			<textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} cols="300" rows="30"></textarea>
		</div>
	);
};

export default Edit;
