import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import img from "../../img/layout/logo.jpg"

class Header extends Component {
	render () {
		return(
			<header className="gnb_box">
				<div className="hd_top">
					<div className="top_wrap ct1 af">
						<ul className="hd_left af">
							<li className="my1"><b>내정보</b>
							</li>
							<li  className="my2"><b><span>1</span>알림</b>
							</li>
						</ul>
						<div className="hd_right">
							<p><span>'홍길동'</span>님 반갑습니다.</p>
						</div>
					</div>
				</div>
				<div className="h_nav ct1 af">
					<div className="logo">
						{/*주석코드 전부 같은 이미지를 불러오는 방법이다.*/}
						{/*<Link to={'/'}><img src={require("../../img/layout/logo.jpg").default} height="65px" width="200px" alt=""/></Link>*/}
						{/*<img src={require("../../img/layout/logo.jpg").default} height="65px" width="200px" alt=""/>*/}
						<img src={img} height="65px" width="200px" alt=""/>
					{/*	require('이미지경로')를 사용하면 '객체' 자체를 가져온다. .default를 해서 이미지를 불러올 수 있다.
							핫 모듈 로딩을 제공하는 웹팩의 성질 때문이라고 한다.
							import를 사용하면 내부에서 default 모듈이 적용된다고 한다.
							이미지 폴더안에 index.js를 만들고 각 폴더의 이미지 경로를 적으면 img폴더만 임포트 가능한가?
					*/}
					</div>
					<nav className="gnb gnb_admin">
						<ul className="af">
							<li className="menulist">
								<Link to={'/UserApproval'}>사용자 관리</Link>
							</li>
							<li className="menulist">
								<Link to={'/AdminResearchProject'}>Research Projects 관리</Link>
							</li>
							<li className="menulist">
								<Link to={'/AdminSoftwareList'}>Software Tools 관리</Link>
							</li>
							<li className="menulist">
								<Link to={'/AdminDataSourceList'}>Data Sources 관리</Link>
							</li>
							{/* 드롭다운 이벤트 */}
							<li  className="menulist"><Link to={'/floatPopulationList'}>유동인구 조회</Link>
								<ul className="gn_2">
									<li><Link to={'/community/notice'}>공지사항</Link></li>
								</ul>
							</li>
							<li  className="menulist">
								<Link to={'/SubCodeManage'}>Sub code 관리</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}

export default Header;