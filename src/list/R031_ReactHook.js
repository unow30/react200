import React, { useState, useEffect } from "react";

export default function R031_ReactHooks(props) {
  const [contents, setContents] = useState("[THIS IS REACT]");

  useEffect(() => {
    console.log("useEffect");
  });

  console.log("render");
  return (
    <div style={{ padding: "0px" }}>
      <h2>{contents}</h2>
      <button
        onClick={() => {
          setContents("[THIS IS HOOK]");
        }}
      >
        버튼
      </button>
    </div>
  );
}
/* 
  useState()함수로 state 변수값을 선언 및 할당한다. 이 때 두 인자가 반환된다.  
  첫번째 인자는 state변수명, 두번째 인자는 state를 변경해주는 함수이다.  
  useEffect()는 componentDidMount()와 같이 return 되는 html 코드들이 화면에 그려진 이후에 실행된다.  
  최초 페이지가 로딩될 때 한 번 실행되고 setContents()로 state가 변경될 때 한 번 더 실행된다.  
*/
