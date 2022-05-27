import React from 'react'
import withHocComponent from './withHocComponent';

class R075_ReactHoc extends React.Component {
	render(){
		console.log('2. HocComponent render')
		return (
			<h2>props.name: {this.props.name}</h2>
		)
	}
}
/*
* 컴포넌트를 인자로 받거나 반환하는 함수를 '고차 컴포넌트(Higher_Order Component)'라고 한다.
* 고차 컴포넌트를 구현하면, 여러 컴포넌트에 동일하게 적용되야 하는 공통 기능을 코드 중복없이 사용할 수 있다.
* R075_ReactHoc에는 constructor나 componentDidMount같은 것이 없다.
* R075_ReactHoc는 export되지 않아서 render가 실행되지 않는다.
* 대신 withHocComponent가 R075_ReactHoc컴포넌트와 컴포넌트명을 파라미터로 넘긴다.
* */
export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc')
