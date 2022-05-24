import React from 'react';
import './App.css';
import FetchGet from './list/R059_FetchGet';
import AxiosGet from './list/R601_AxiosGet';

import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
	return (
		<div className="App">
			<h1>start react 200</h1>
			<FetchGet />
			<AxiosGet />
		</div>
	);
}
