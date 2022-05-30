import React from 'react'
import {Consumer} from './R076_ContextApi'

export default class Children2 extends React.Component {
	render () {
		return (
			<Consumer>
				{contextValue => <h3>{`contextValue: ${contextValue}`}</h3>}
			</Consumer>
		)
	}
}

/*
* 부모 컴포넌트 <Provider value={'react200'}>
* 부모 컴포넌트에서 익스포트했던 Consumer를 임포트해 사용한다.
* 부모 컴포넌트에서 value에 할당했던 데이터를 contextValue 변수로 받아 출력한다.
* */