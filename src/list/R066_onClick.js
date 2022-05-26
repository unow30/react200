import React, {Component} from 'react'

class R066_onClick extends Component {

	buttonClick = (param)=>{
		if(typeof param != 'string') param = "Click a" //param을 받지 않아도 정상적으로 실행할 수 있다.
		console.log('param :'+param);
	}

	render(){
		return (
			<>
				<button onClick={e=> this.buttonClick("Click button")}>click button</button>
				<div onClick={e=> this.buttonClick("Click div")}>Click div</div>
				<a href="#:" onClick={this.buttonClick}>Click a</a>
			</>
		)
	}
}

export default R066_onClick