import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import App from "./App";
import {createStore} from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers);

/*
* We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
* */
// const store2 = configureStore(reducers);
//리덕스 루트 렌더
const listener = () =>{
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.subscribe(listener);
listener();
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
