import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Edit from '../edit/Edit';
import Markdown from '../markdown/Markdown';
import './header.css';

const Header = ({ textValue, setTextValue }) => {
	console.log(textValue);
	return (
		<div>
			<div className="heder">
				<Link className="link" to="/edit">
					Edit
				</Link>
				<Link className="link" to="/markdown">
					Markdown
				</Link>
			</div>

			<Routes>
				<Route path="/edit" element={<Edit textValue={textValue} setTextValue={setTextValue} />} />
				<Route path="/markdown" element={<Markdown textValue={textValue} />} />
			</Routes>
		</div>
	);
};

export default Header;
