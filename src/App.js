import React from 'react';
import './App.css';
import ReactRef from './list/R073_ReactRef'
import Curring from './list/R704_ReactCurring'
import ReactHoc from './Hoc/R075_ReactHoc'

import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
	return (
		<div className="App">
			<h1>start react 200</h1>
			<ReactRef/>
			<Curring/>
			<ReactHoc name={'react200'}/>
		</div>
	);
}

