import React from 'react';
import './App.css';
import ReactonClick from './list/R066_onClick';
import ReactChange from './list/R067_onChange';
import ReactMouseMove from './list/R068_onMouseMove'
import ReactMouseOver from './list/R069_onMouseOver'

import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
	return (
		<div className="App">
			<h1>start react 200</h1>
			<ReactonClick/>
			<ReactChange/>
			<ReactMouseMove/>
			<ReactMouseOver/>
		</div>
	);
}

