import React, {Component} from 'react'

class R073_ReactRef extends Component {
	constructor(props) {
		super(props);
		this.InputRef = React.createRef();
		//Refs는 render 메소드에서 생성된 DOM 노드 또는 React 요소에 접근하는 방법을 제공합니다.
	}

	RefFocus = (e) =>{
		this.InputRef.current.focus();
	}

	JavascriptFocus(){
		document.getElementById('id').focus()
	}

	render(){
		return (
			<>
				<input id={'id'} type={'text'} ref={this.InputRef}/>
				<input type={'button'} value={'Ref Focus'} onClick={this.RefFocus}/>
				<input type={'button'} value={'Javascript Focus'} onClick={this.JavascriptFocus}/>
			</>
		)
	}

}

export default R073_ReactRef