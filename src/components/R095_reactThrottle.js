import React, {Component} from 'react';
import {throttle} from 'lodash'

export default class extends Component{
	throttleFunc = throttle((e)=>{
		// console.time('시간표시')
		console.log(`throttle API Call`)
		console.log(e.target.value)
		// console.timeEnd('시간표시')
	}, 1000)

	render(){
		return (
			<>
				<h2>검색어 입력</h2>
				<input type={'text'} onChange={this.throttleFunc}/>
			</>
		)
	}
}

/*
* debounce는 연속된 이벤트 중 마지막 이벤트가 발생한 시점부터 n초 후 동작한다
* throttle은 이벤트 수와 상관없이 지정한 시간 단위당 최대 한번만 동작한다.
* throttleFunc은 onChange때마다 호출되지만, trottle함수는 1초마다 0개 또는 1개의 로그를 출력한다.
* 2초동안 여러 글을 작성했다면, throttle은 0초, 1초, 2초대에 작성된 글자로 데이터 호출 코드를 실행한다
* */