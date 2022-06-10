import React, {Component} from 'react'
import cookie from 'react-cookies'

export default class R085_cookieSave extends Component{
	componentDidMount() {
		const expires = new Date()
		expires.setMinutes(expires.getMinutes()+60)
		cookie.save('userid','react200',{
			path: '/',	//쿠기 값 저장 서버경로. localhost3000/ 에서 쿠키 확인 가능. 모든 페이지에서 접근할 수 있다.
			// path: '/react',	//쿠기 값 저장 서버경로. localhost3000/react 에서 쿠키 확인 가능.
			expires,
			//secure: true, //https로 통신할 경우만 쿠키 저장
			//httpOnly: true //document.cookie라는 js코드로 비정상적으로 접속하는 것을 막는 옵션
		})
	}

	render(){
		return (
			<>
				<h3>react-cookie Save</h3>
				<h3>localhost3000/react 경로 접근 > 크롬 개발자 도구 > application > cookies > localhost3000/react</h3>
			</>
		)
	}
}