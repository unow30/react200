import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import React, { useState, useEffect } from "react";
export default function R036_ReactstrapButtonDropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => console.log(dropdownOpen));

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header style={{ marginLeft: "-10px", fontSize: "20px" }}>
          헤더
        </DropdownItem>
        <DropdownItem disabled>비활성화 버튼</DropdownItem>
        <DropdownItem a href="http://example.com">
          웹 사이트로 이동
        </DropdownItem>
        <DropdownItem onClick={(e) => alert("Alert 버튼")}>
          Alert버튼
        </DropdownItem>
        <DropdownItem header style={{ marginLeft: "-10px", fontSize: "20px" }}>
          과일
        </DropdownItem>
        <DropdownItem>사과</DropdownItem>
        <DropdownItem>배</DropdownItem>
        <DropdownItem>오렌지</DropdownItem>
        <DropdownItem disabled>배추</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}
