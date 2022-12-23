import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';

function App() {
	const [textValue, setTextValue] = useState('');
	return (
		<div className="App">
			<Header textValue={textValue} setTextValue={setTextValue} />
		</div>
	);
}

export default App;
