import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export default class R047_ReactstrapListGroup extends Component {
  alertFunction = (e) => {
    return alert("button");
  };

  changeAttribute = (e) => {
    let current = document.getElementsByClassName("isDisable");
    current.disabled = false;
    console.log(current);
  };

  render() {
    return (
      <>
        <ListGroup>
          <ListGroupItem color="danger" className="justify-content-between">
            Badge<Badge pill>200</Badge>
          </ListGroupItem>
          <ListGroupItem className="isDisable" disabled tag="a" href="#">
            Disabled로 비활성화
          </ListGroupItem>
          <ListGroupItem tag="button" onClick={this.changeAttribute}>
            비활성화 / 활성화 버튼
          </ListGroupItem>
          <ListGroupItem tag="a" href="http://example.com">
            Link
          </ListGroupItem>
          <ListGroupItem tag="button" action onClick={this.alertFunction}>
            Button
          </ListGroupItem>
        </ListGroup>
      </>
    );
  }

  componentDidMount() {
    let current = document.getElementsByClassName("isDisable");

    console.log(current);
  }
}
