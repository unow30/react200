import React, { Component } from 'react';

class R059_FetchGet extends Component {
	componentDidMount = async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos/1' //샘플 json데이터 전송 사이트
		);
		const body = await response.json();
		console.log(JSON.stringify(body));
	};

	render() {
		return <h1>fetch get</h1>;
	}
}

export default R059_FetchGet;
