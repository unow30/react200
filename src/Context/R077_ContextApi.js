import React, {Component, createContext}from 'react'
import Children3 from './contextChildren3'

const {Provider, Consumer} = createContext()
export {Consumer}

export default class R077_ContextApi extends Component{
	constructor(props){
		super(props)
		this.setStateFunc = this.setStateFunc.bind(this)
	}

	setStateFunc = value => { this.setState({name: value}) }

	render(){
		const content = {
			...this.state,
			setStateFunc: this.setStateFunc
		}
		return (
			<Provider value = {content}>
				<Children3/>
			</Provider>
		)
	}
}

/*
* props는 데이터가 부모에서 자식 컴포넌트로 단방향으로만 이동할 수 있다.
* 컨텍스트를 사용하면 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경할 수 있다.
* content 변수에 R077_ContextApi의 state와 setStateFunc 함수를 할당한다.
* Provider의 value로 content를 할당하고 이를 자식 컴포넌트 Children3에 전달할 것이다.
* */