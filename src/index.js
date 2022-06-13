import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from "./components/App";
// import * as serviceWorker from './serviceWorker'
// import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

/*
* ./components/App의 App을 라우팅 전용 컴포넌트로 사용할 것이다.
* App과 하위 컴포넌트에서 Route, Link를 사용한다.
* BrowserRouter로 감싸진 하위 컴포넌트에서 Route와 Link를 사용할 수 있다.
* Route는 호출하는 url에 따라 이동할 component를 정한다.
* Link는 a태그와 같이 페이지에 표시되는 링크를 클릭하면 url을 호출한다.
*
* */
