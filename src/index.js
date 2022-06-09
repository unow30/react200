import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import App from "./App";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reducers from './redux/reducers';

const CallMiddleware = store => nextMiddle => action => {
  console.log('1. reducer 실행 전');
  console.log('2. action.type: '+action.type+', store str :'+store.getState().data.str);
  let result = nextMiddle(action);
  console.log('3. reducer 실행 후');
  console.log('4. action.type : '+action.type+', store str : '+store.getState().data.str);
  return result;
}
/*
 *
 * CallMiddleware는 다중 컬링 구조로, 세 가지 인자를 순서대로 받는다.
 * 첫 번째 인자는 스토어, 두 번째 인자는 다음 미들웨어를 호출하는 함수로
 * 예제에서는 미들웨어가 1개이기 때문에 리듀서를 호출한다.
 * 세 번째 인자는 액션이다.
 * */


const store = createStore(reducers, applyMiddleware(CallMiddleware));

/*
* We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
* */
// const store2 = configureStore(reducers);
//리덕스 루트 렌더
const listener = () =>{
  ReactDOM.render(
    <Provider store={store}>
      <App indexProp={'react'}/>
    </Provider>,
    document.getElementById('root')
  );
};

store.subscribe(listener);
listener();

/*
* react-redux는 redux를 react와 연동해서 사용하기 편리하도록 만든 라이브러리다.
* store를 하위 컴포넌트에 매번 상속하지 않고 사용할 수 있다.
* 스토어 데이터를 사용, 변경하는 코드를 모듈화해 컴포넌트 내에 중복된 코드 사용을 최소화할 수 있다.
* 컨텍스트 api에서 사용했던 Provider와 동일하다. 모든 하위 컴포넌트에서 데이터를 사용할 수 있다.
* */

/*
* 리덕스 패키지의 createstore를 임포트한다.
* createStore 함수의 파라미터로 reducers폴더 경로를 넘긴다.
* reducers 폴더의 index.js에는 데이터 초기값을 설정하고 변경해주는 함수가 있는데 이를 '리듀서'라고 한다.
* store를 App컴포넌트에 전달한다. render함수를 listener라는 함수 내부에 위치시킨다.
* store.subscribe를 사용하면 store 데이터에 변화가 있을 때
* 인자로 받은 콜백함수(listener) 내부의 render함수를 실행하고 변경된 데이터를 렌더링한다.
* 초기 렌더링을 위해 수동으로 render함수를 실행한다.(listener())
* */


// 리엑트 루트 렌더
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
