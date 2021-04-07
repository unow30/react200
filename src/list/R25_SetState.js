import React, { Component } from "react";

export default class R024_ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react"
    };
  }

  StateChange = (flag) => {
    if (flag == "direct") this.state.StateString = "리엑트";
    if (flag == "setState") this.setState({ StateString: "리엑트" });
  };

  render() {
    return (
      <div style={{ padding: "0px", fontSize: "30px" }}>
        <button onClick={(e) => this.StateChange("direct", e)}>
          state 직접 변경
        </button>
        <button onClick={(e) => this.StateChange("setState", e)}>
          setState로 변경
        </button>
        <br />
        [state 변경하기] stateString : {this.state.StateString}
      </div>
    );
  }
}
