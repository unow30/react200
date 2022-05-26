import React, {Component} from 'react'

class R070_onMouseOut extends Component {
	MouseOut(e, tag){
		console.log(tag)
	}

	render(){
		return (
			<>
				<div onMouseOut={e=>this.MouseOut(e, "div")}>
					<h3>DIV onMouseOut</h3>
				</div>
				<input type={'text'} onMouseOut={e=>this.MouseOut(e, "div")}/>
				<select onMouseOut={e=>this.MouseOut(e, "div")}>
					<option value={'react'}>react</option>
					<option value={'200'}>200</option>
				</select>
			</>
		)
	}
}

export default R070_onMouseOut