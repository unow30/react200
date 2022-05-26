import React, {Component} from 'react'

class R069_onMouseOver extends Component{

	MouseOver = (e, tag)=>{
		console.log(e.target.value)
		console.log(tag)
	}

	render(){
		return (
			<>
				<div onMouseOver={e=>this.MouseOver(e, "div")}>
					<h3>DIV onMouseOver</h3>
				</div>
				<input type={'text'} onMouseOver={e=>this.MouseOver(e, "div")}/>
				<select onMouseOver={e=>this.MouseOver(e, "div")}>
					<option value={'react'}>react</option>
					<option value={'200'}>200</option>
				</select>
			</>
		)
	}
}

export default R069_onMouseOver