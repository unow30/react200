import React, { Component } from "react";

export default class R009_Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h2>[this is Es6 String]</h2>;
  }

  componentDidMount() {
    let jsString1 = "자바스크립트";
    let jsString2 = "입니다.\n 다음 줄입니다.";
    console.log(jsString1 + "문자열" + jsString2 + "~");

    let Es6String1 = "ES6";
    let Es6String2 = "입니다";
    console.log(`${Es6String1} 문자열${Es6String2}`);

    let longString = "ES6에 추가된 String 함수들입니다.";
    console.log("startWith: " + longString.startsWith("ES6에 추가"));
    console.log("endWith: " + longString.endsWith("함수들입니다."));
  }
}
