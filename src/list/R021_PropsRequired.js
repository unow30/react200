import React, { Component } from "react";
import datatype from "prop-types";

export default class R021_PropsRequired extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;
    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}
R021_PropsRequired.propTypes = {
  ReactString: datatype.isRequired,
  ReactNumber: datatype.number.isRequired
};
/*
  props를 필수 값으로 사요하는 방법
  prop-types를 사용하여 props의 자료형을 설정할 수 있다.
  isRequired는 반드시 입력되어야 하는 prop값으로 정의된다. 변수값이 없는 경우
  경고 메시지가 발생할 수 있다. 콘솔에 경고문 Failed prop type: 이 나타난다.
  ReactString.이라는 props key는 없다. 화면에 ReactNumber값만 출력된다.
  
ex: datatype.string.isRequired/ datatype.number.isRequired로 쓸 수 있다.
타입이 안 맞으면 경고문만 뜨고 해당값은 화면에 출력이 된다.
  
*/
