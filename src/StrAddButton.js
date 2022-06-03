import React, {Component} from 'react'
import {add, del} from './redux/actions'

export default class StrAddButton extends Component {
	render () {
		return (
			<>
				<input value={'Add200'} type={'button'} onClick={this.addString}/>
				<input value={'del200'} type={'button'} onClick={this.deleteString}/>
			</>
		)
	}

	addString = () => {
		this.props.store.dispatch(add())
	}

	deleteString = () =>{
		this.props.store.dispatch(del())
	}
}

/*
* dispatch 함수를 통해 add 함수(actions 폴더의 index.js파일)의 반환 값을 스토어에 전달한다.
* 이 떄 add 함수의 type값을 리듀서(reducers/index.js)에서 참고해 스토어 테이터를 변경한다.
* 결론적으로 dispatch함수는 리듀서에 액선을 전달하고 리듀서에서는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경한다.
* */