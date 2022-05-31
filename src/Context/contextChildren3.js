import React, {Component} from 'react'
import {Consumer} from './R077_ContextApi'

export default class Children3 extends Component{
	render () {
		return (
			<Consumer>
				{contextValue =>
					<button onClick={e => contextValue.setStateFunc('react200')}>
						{contextValue.name}_button
					</button>
				}
			</Consumer>
		)
	}
}

/*
* Children3 컴포넌트가 render되면 button의 내용이 _button만 나올 것이다.
* 버튼을 onClick하면 Consumer로 전달받은 contextValue의 setStateFunc로 state.name을 'react200'으로 변경한다.
* */