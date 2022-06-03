import {ADD, DELETE} from '../actions'
import {combineReducers} from 'redux'

const initState = {
	str: 'react',
};

const data = (state = initState, action) =>{
	switch(action.type){
		case ADD:
			return state, {
				str: state.str + '200'
			};
		case DELETE:
			return state, {
				str: state.str.replace('200', '')
			}
		default:
			return state;
	}
};

const App = combineReducers({
	data
});

export default App;

/*
* 리듀서를 스토어에 넘겨주기 위해 combineReducers 함수를 임포트한다.
* 리듀서 함수 data를 combineReducers 함수를 이용해 하나의 리듀싱 함수로 변환하고 익스포트한다.
* 이 함수는 src/index.js의 createStore함수의 파라미터로 넘겨진다.
* 스토어 state값에 변경이 발생했기 때문에 subscribe 함수가 동작해 화면이 렌더링된다.
* */