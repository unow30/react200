import React, {Component} from 'react';
import StrAddButton from './StrAddButton'

export default class App extends Component{
	render(){
		console.log(this.props.store.getState())
		return (
			<div>
				<h1>start react 200</h1>
				<span>{this.props.store.getState().data.str}</span><br/>
				<StrAddButton store={this.props.store}/>
			</div>
		)
	}
}

/*
* console.log(this.props.store)
* store method
* dispatch()
* getState()
* replaceReducer(nextReducer)
* subscribe(listener)
* */
