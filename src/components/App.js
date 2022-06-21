import React, {Component} from 'react';
import {Routes,Route} from 'react-router-dom';
import ReactRouter from './R089_reactRouter'
import ReactRouter2 from './R089_reactRouter2'

import '../css/new.css'
import HeaderAdmin from './Header/Header admin'
import Footer from './Footer/Footer'
import LoginForm from './LoginForm'

import ReactDebounce from './R094_reactDebounce'
import ReactThrottle from './R095_reactThrottle'

import FloatingPopulationList from './Floating_population/FloatingPopulationList';

import Axios_FloatingPopulationList from './Floating_population/Axios_FloatingPopulationList';

export default class App extends Component {
	render(){
		return (
			<div className={'App'}>
					{/*<Route exact path='/what' component={reactRouter}/>*/}
				{/*<Route exact path='/reactRouter2' component={reactRouter2}/>*/}
				<HeaderAdmin/>
				<Routes>
					{/*<Route exact path='/' element={<ReactRouter/>}/>*/}
					<Route exact path='/' element={<LoginForm/>}/>
					<Route exact path='/reactRouter2' element={<ReactRouter2/>}/>
					<Route exact path='/Debounce' element={<ReactDebounce/>}/>
					<Route exact path='/Throttle' element={<ReactThrottle/>}/>
					{/*<Route exact path='/floatPopulationList' element={<FloatingPopulationList/>}/>*/}
					<Route exact path='/1' element={<Axios_FloatingPopulationList/>}/>
				</Routes>
				<Footer/>
			</div>
		)
	}
}
/*
* Routes 안에 Route를 입력해야 한다. route 사용법 변경
* One of the most exciting changes in v6 is the powerful new <Routes> element.
* This is a pretty significant upgrade from v5's <Switch> element
* with some important new features including
* relative routing and linking, automatic route ranking, and nested routes and layouts.
*
* Route 태그 안에 경로별 실행할 컴포넌트를 표시할 때 component가 아니라 element로 표시해야 한다.
* 또한 리엑트 태그 규칙에 따라 태그명은 첫글자 대문자로 적어야 한다.
* Matched leaf route at location "/reactRouter2" does not have an element.
* This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.
* */