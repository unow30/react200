import React, {Component} from 'react'
import {debounce} from 'lodash'


class R094_reactDebounce extends Component {
	debounceFunc = debounce(()=>{
		// let after_1sc = document.getElementsByClassName('after_1sc')
		// after_1sc.innerHTML = this.state.text
		console.log('debounce api call');
	}, 1000);

	render(){
		return (
			<>
				<h2>검색어 입력</h2>
				<input type={'text'} onChange={this.debounceFunc}/>
				{/*<div className={'after_1sc'}></div>*/}
			</>
		)
	}
}

export default R094_reactDebounce;
/*
* debounce는 연속된 이벤트 호출이 일어나는 상황에 사용한다.
* 마지막 이벤트 이후 추가 이벤트가 발생하지 않을때 실행하는 함수다.
* input onChange이벤트의 마지막 호출이 끝나면 debounceFunc가 1초 후 로그를 출력한다.
* */