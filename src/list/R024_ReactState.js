import React, { Component } from "react";

export default class R024_ReactState extends Component {
  constructor(props) {
    console.log("1. read first");
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200
    };
  }

  render() {
    console.log("2. render next to constructor");
    return (
      <div style={{ padding: "0px" }}>
        {this.state.StateString}
        {this.state.StateNumber}
      </div>
    );
  }
}
