import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default class R038_ReactstrapButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 10 };
  }

  move = (type, e) => {
    if (type === "left") {
      this.setState({ number: this.state.number - 1 });
    } else if (type === "right") {
      this.setState({ number: this.state.number + 1 });
    } else if (type === "middle") {
      this.setState({ number: 10 });
    }
  };

  render() {
    return (
      <div style={{ padding: "0px" }}>
        <ButtonGroup style={{ padding: "0px" }}>
          <Button onClick={(e) => this.move("left")}>LEFT</Button>
          <Button onClick={(e) => this.move("middle")}>MIDDLE</Button>
          <Button onClick={(e) => this.move("right")}>RIGHT</Button>
        </ButtonGroup>
        <br />
        {this.state.number}
      </div>
    );
  }
}
