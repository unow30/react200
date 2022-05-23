import React, { Component } from 'react';
import Swal from 'sweetalert2';

class R056_Sweetalert2Basic extends Component {
	componentDidMount() {
		// Swal.fire('1. SweetAlert');//비동기동작이라 alert()가 먼저 실행된다.
		// alert('2. alert()');
		Swal.fire('1. SweetAlert').then((result) => {
			alert('2. result.value : ' + result.value);
		});
	}

	render() {
		return <h1>sweetalert2</h1>;
	}
}

export default R056_Sweetalert2Basic;
