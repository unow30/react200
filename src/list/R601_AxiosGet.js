import React, { Component } from 'react';
import axios from 'axios';

class R061_AxiosGet extends Component {
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
			console.log(res);
		});
	}

	render() {
		return <h1>axiosGet</h1>;
	}
}

export default R061_AxiosGet;
