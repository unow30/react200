import React, {Component} from 'react'

class R074_ReactCurring extends Component {
/*
* 커링은 함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수다.
* 함수를 하나만 사용할 떄는 모든 파라미터를 한 번에 넣어야 한다.
* 커링을 사용하여 함수를 분리할 수 있으므로 파라미터도 나눠 전달할 수 있다.
* */


	plusNumOrString(c,d){
		return c+d;
	}

	//this.plusNumOrString(a,b)를 return하는 또 다른 함수를 return한다.
	PlusFunc1(a){
		return function(b) {
			return this.plusNumOrString(a, b)
		}.bind(this)
	}

	// PlusFunc1 함수를 간단하게 표현한 것이다.
	PlusFunc2 = a => b => this.plusNumOrString(a, b)

	//PlusFunc1 함수를 호출할 때 a와 200을 파라미터로 함께 전달한다.
	PlusFunc(a){
		return this.PlusFunc1(a)(200)
	}

	render(){
		return (
			<>
				<input type={'button'} value={'NumberPlus'} onClick={e=>{alert(this.PlusFunc(100))}}/>
				<input type={'button'} value={'StringPlus'} onClick={e=>{alert(this.PlusFunc('react'))}}/>
			</>
		)
	}
}

export default R074_ReactCurring