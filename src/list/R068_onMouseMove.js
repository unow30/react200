import React, {Component} from 'react'

class R068_onMouseMove extends Component {

	MouseMove = (event, tag) =>{
		console.log(`tag: ${tag}`)
		// console.log(event.target.value) 마우스가 조금이라도 계속 움직이면 콘솔이 실행된다.
		// onMouseMove를 태그 안에 들어올 때 한번만 실행하는 방법은? onMouseOver는 커서가 진입할 때 발생하는 이벤트
	}

	render(){
		return (
			<>
				<div onMouseMove={ e=> this.MouseMove(e,'div')} style={{color:"red", background:'grey'}}>
					<h3>DIV onMouseMove</h3>
				</div>
				<input type={'text'} onMouseMove={e=> this.MouseMove(e,"input")}/>
				<select>
					<option value={'react'}>react</option>
					<option value={'200'}>200</option>
				</select>
			</>
		)
	}
}

export default R068_onMouseMove