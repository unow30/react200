import React, { Component } from "react";
import datatype from "prop-types";

export default class R020_PropsObjVal extends Component {
  render() {
    let { objectjson } = this.props;
    return <div style={{ padding: "0px" }}>{JSON.stringify(objectjson)}</div>;
  }
}
//BooleanTrueFalse는 처음에 false값으로 컴포넌트에 넘어왔다.
//BooleanTrueFalse가 true면 문자열 "2."를 출력하고, false면 "1."을 출력한다.
//BooleanTrueFalse.toString()으로 true, false 자체를 출력해준다.

R020_PropsObjVal.propTypes = {
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
  })
};
/*
prop-types: React props 및 유사한 객체에 대한 런타임 유형 검사.
컴포넌트의 props에서 타입 검사를 하고 싶을 때 사용한다.
flow나 typeScript를 사용하지 않는 경우 prop-types 라이브러리를 사용한다.
ObjectJson의 내부 key값에 자료형을 선언했다.
twohundread가 문자열 ("200")으로 전달되어 선언한 자료형과 일치하지 않는다.
콘솔창에 경고 메시지가 뜬다. 화면에 해당 값은 출력된다.
https://www.npmjs.com/package/prop-types
*/
