import React, { Component } from "react";
import { shallowEqualArrays } from "shallow-equal";

export default class ShallowEqual extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      StateString: "react"
    };
  }

  render() {
    console.log("render()실행");
    return (
      // 이번 파트에서 버튼들은 쓰이지 않는다. shallow-equal에 대해 배운다.
      <div style={{ padding: "0px" }}>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObject")}>
          객체 배열 변경
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    const object = { react: "200" };
    const Array1 = ["리엑트", object];
    const Array2 = ["리엑트", object];
    const Array3 = ["리엑트", { react: "200" }];

    console.log(
      "shallowEqualArrays(Array1, Array2) :" +
        shallowEqualArrays(Array1, Array2)
    );
    console.log(
      "shallowEqualArrays(Array2, Array3) :" +
        shallowEqualArrays(Array2, Array3)
    );
    this.setState({ StateString: "react" });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate :" + shallowEqualArrays(this.state, nextState) //({ StateString: "react" }, { StateString: "react" })
    );
    return !shallowEqualArrays(this.state, nextState);
  }
}
/**
 *  shallow-equal 패키지는 PureComponent에서 state의 값의 변경을 비교하는 것과
 * 동일한 기능을 하는 함수를 제공한다. shallowEqualArrays()함수를 사용하면 문자열과 배열은 값만 비교한다.
 * 객체는 PureComponent와 동일하게 참조 값을 비교한다.
 * shallow-equal 패키지를 설치하고 다음 과정을 살펴본다.
 *
 * componentDidMount에서 shallowEqualArrays()함수로 Array1, Array2와 Array2, Array3을 비교한다.
 * 비교 후 동일하면 true를 반환한다.
 * shallowEqualArrays(Array1, Array2)는 true가 나오고, shallowEqualArrays(Array2, Array3)는 false가 나온다.
 * const object의 {react:"200"}과 Array3의 {react:"200"}은 같은 값을 가지나 참조값이 다름으로(저장주소가 다름으로)
 * false값이 리턴되는 것이다.
 *
 * shouldComponentUpdate()함수는 변경된 props와 state값을 파라미터로 받을 수 있고,
 *
 * */
