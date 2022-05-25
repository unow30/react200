import React, {Component} from 'react';

class R065_Promise extends Component {
	componentDidMount() {
		new Promise((resolve,reject)=>{
			reject(Error("error info")); //거부함수 reject를 실행. 에러객체를 사용함
		})
			.then(res => console.log('then: '+res))// resolve함수가 실행 안되어 넘어간다. catch를 실행
			.catch(res => console.log("catch :"+res))
	}

	render(){
		return (
			<h1>Promise</h1>
		)
	}
}

export default R065_Promise