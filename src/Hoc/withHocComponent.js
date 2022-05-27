import React from 'react';
export default function withHocComponent(InComponent, InComponentName){
	return class OutComponent extends React.Component{
		componentDidMount() {
			console.log(`3. InComponentName ${InComponentName}`)
		}
		render(){
			console.log('1. InComponent render')
			return (
				<InComponent {...this.props}/>
			)
		}
	}
}

/*
* R075_ReactHoc 컴포넌트에서 withHocComponent를 import하였고
* withHocComponent에 파라미터로 R075_ReactHoc 컴포넌트와 컴포넌트명을 넣고 실행하여 app.js로 export한다.
* InComponent는 R075_ReactHoc 컴포넌트다. R075_ReactHoc를 return하면서 prop값을 전달한다.
* OutComponent render함수가 실행된 후 InComponent의 render가 실행되며 OutComponent의 componentDidMount가 실행된다.
* */