import React, {Component} from 'react';
import {connect} from 'react-redux'
import StrAddButton from './StrAddButton'

class App extends Component{
	render(){
		// console.log(this.props.store.getState())
		return (
			<div>
				<h1>start react 200</h1>
				{/*<span>{this.props.store.getState().data.str}</span><br/>*/}
				<span>{this.props.str}</span><br/> {/*위 redux와 비교해서 길이가 많이 짧아졌다.*/}
				{/*<StrAddButton store={this.props.store}/>*/}
				<StrAddButton AppProp={'200'}/>{/*위에서처럼 store를 props로 다시 전달하지 않아도 된다.*/}
			</div>
		)
	}
}

let mapStateToProps = (state, props) => {
	console.log('props from index.js : ' + props.indexProp)
	return {
		str: state.data.str,
	}
	 /*
	 * 첫 번째 파라미터로 스토어의 state변수를 받는다.
	 * 두 번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다.
	 * */
}

App = connect(mapStateToProps, null)(App)
export default App
/*
* function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
* connect still works and is supported in React-Redux 8.x. However, we recommend using the hooks API as the default.
* connect는 여전히 작동하며 React-Redux 8.x에서 지원됩니다. 그러나 기본적으로 hooks API를 사용하는 것이 좋습니다.
*
* connect 함수는 파라미터를 4개까지 받을 수 있다.
* mapStateToProps는 스토어의 상태값을 컴포넌트 props에 할당하는 함수다.
* 두번쨰 함수(mapDispatchToProps)는 dispatch함수를 컴포넌트 함수에 바인딩하는 함수다
* */


/*
* console.log(this.props.store)
* store method
* dispatch()
* getState()
* replaceReducer(nextReducer)
* subscribe(listener)
* */
