import React from 'react';
import './styles.css';
import Sweetalert2Basic from './sweetAlert2Basic/R056_Sweetalert2Basic';
import Sweetalert2Position from './sweetAlert2Basic/R057_Sweetalert2Position';

export default function App() {
	return (
		<div className="App">
			<h1>start react 200</h1>
			<Sweetalert2Basic />
			<Sweetalert2Position />
		</div>
	);
}
