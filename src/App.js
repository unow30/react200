import React from 'react';
import './App.css';
// import CookieSave from './list/R085_cookieSave'
// import CookieLoad from './list/R086_cookieLoad'
import CookieRemove from './list/R087_cookieRemove'
import 'bootstrap/dist/css/bootstrap.css';
export default function App() {
	return (
		<div className="App">
			<h1>start react 200</h1>
			<CookieRemove/>
		</div>
	);
}
