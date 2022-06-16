import React, {Component} from 'react'
import {connect} from 'react-redux'
import {add, del} from './redux/actions'

class StrAddButton extends Component {
	render () {
		return (
			// <>
			// 	<input value={'Add200'} type={'button'} onClick={this.addString}/>
			// 	<input value={'del200'} type={'button'} onClick={this.deleteString}/>
			// </>
			<>
				<input value={'Add200'} type={'button'} onClick={this.props.addString}/>
				<input value={'Add200'} type={'button'} onClick={this.props.deleteString}/>
			</>
		)
	}

	// addString = () => {
	// 	this.props.store.dispatch(add())
	// }
	//
	// deleteString = () =>{
	// 	this.props.store.dispatch(del())
	// }

}

let mapDispatchToProps = (dispatch, props) => {
	console.log('Props from App.js : ' +props.AppProp)/* App.js에서 전달한 AppProp를 콘솔에 출력한다.*/
	return {
			addString: () => dispatch(add()), /*dispatch함수를 컴포넌트 내 함수인 addString에 바인딩한다. */
			deleteString: () => dispatch(del())
	}
}

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton)
/*
* connect 함수의 두 번쨰 파라미터는 mapDispatchToProps 함수로, 리듀서에 액션을 전달하는 함수인 dispatch를 인자로 받아 사용할 수 있다.
* 첫 번째 파라미터로 dispatch로, 두 번째 파라미터로 props 변수를 받는다.
* */
export default StrAddButton

/*
* dispatch 함수를 통해 add 함수(actions 폴더의 index.js파일)의 반환 값을 스토어에 전달한다.
* 이 떄 add 함수의 type값을 리듀서(reducers/index.js)에서 참고해 스토어 테이터를 변경한다.
* 결론적으로 dispatch함수는 리듀서에 액선을 전달하고 리듀서에서는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경한다.
* */