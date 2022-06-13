import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class R089_reactRouter extends Component {
	render() {
		return(
			<>
				<h1>path='/'</h1>
				<h3>R089_reactRouter</h3>
				<Link to={'/reactRouter2'}>move to reactRouter2 link</Link>
			</>
		)
	}
}

export default R089_reactRouter

/*
* Link는 a태그와 동일하게 작동한다.
* path를 Link 속성에 연결하면 링크를 클릭할 때 라우팅된 컴포넌트로 이동한다.
* */