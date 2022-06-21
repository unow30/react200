import React, {Component} from 'react'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.withCredentials = true;

class Axios_FloatingPopulationList extends Component {
	constructor(props){
		super(props);

		this.state = {
			responseFPList: '',
			append_FPList:'',
		}
	}

	componentDidMount() {
		this.callFloatPopulListApi()
	}

	callFloatPopulListApi = async ()=>{
		//cors 에러를 package.json에서 proxy 설정으로 해결했다.
		//단 서버없이 빌드하면 http-proxy-middleware같은 미들웨어가 필요하다.
		axios.get('/3130000/openapi/floatingPopulation/getfloatingPopulation?pageNo=0&filterValues=디지털미디어시티인근주거밀집지역&serviceKey=j%2BgrhtpNBHr2qWY%2BIstpC5mOSlP9vk%2FLs0hbu9kwiMrUjbjhQ8HX7mM%2B7SOggjYP0Wqtuot5LW6UhvzQqOL%2Fww%3D%3D&filterKey=addr &numOfRows=200&type=json'
		,{}).then(response =>{
			try{
				// console.log(response)
				this.setState({responseFPList: response['data']});
				this.setState({append_FPList: this.FloatPopulListAppend()});
			}catch(e){
				alert(e)
			}
		}).catch(error =>{console.log(error); return false;});
	}

	FloatPopulListAppend = () =>{
		let result = []
		let FPList = this.state.responseFPList['items']
		// let jsonString = JSON.stringify(FPList)
		// jsonString = jsonString.replace(/\(1시간단위\)/g,'')
		// jsonString = jsonString.replace(/\(10세단위\)/g,'')

		// let json = JSON.parse(jsonString)

		for(let i=0; i<FPList.length; i++){
			let data = FPList[i]

			result.push(
				//error Warning: Each child in a list should have a unique "key" prop "
				//key prop을 사용해 컴포넌트와 dom요소 간의 관계를 생성한다. 리엑트는 이 관계를 이용해 리렌더링 여부를 결정한다.
				//불필요한 렌더링을 막기위해 컴포넌트마다 독립적인 key를 생성한다.
				<tr key={i} className={'hidden_type'}>
					<td>{i+1}</td>
					<td>{data['bottom']}</td>
					<td>{data['grid_id']}</td>
					<td>{data['top']}</td>
					<td>{data['weekend']}</td>
					<td>{data['_14age']}</td>
					<td>{data['_left']}</td>
					<td>{data['_right']}</td>
				</tr>
			)
		}
		console.log(result)
		return result
	}

	render(){
		return (
			<section className={'sub_wrap'}>
				<article className={'s_cnt mp_pro_li ct1 mp_pro_li_admin'}>
					<div className={'li_top'}>
						<h2 className={'s_tit1'}>서울시 유동인구 데이터 - 19년 11월</h2>
					</div>
					<div className={'list_cont list_cont_admin'}>
						<table className={'table_ty1 fp_tlist'}>
							<thead>
							<tr>
								<th>Row</th>
								<th>일자</th>
								<th>시간</th>
								<th>연령대</th>
								<th>성별</th>
								<th>시</th>
								<th>군구</th>
								<th>유동인구수</th>
							</tr>
							</thead>
						</table>
						<table className={'table_ty2 fp_tlist'}>
							<tbody>
							<tr className={'hidden_type'}>
								<td>1</td>
								<td>20191101</td>
								<td>00</td>
								<td>40</td>
								<td>여성</td>
								<td>서울</td>
								<td>영등포구</td>
								<td>32670</td>
							</tr>
							{this.state.append_FPList}
							</tbody>
						</table>
					</div>
				</article>
			</section>
		)
	}
}

export default Axios_FloatingPopulationList