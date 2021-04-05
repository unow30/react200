import React, { Component } from "react";

export default class R006_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps call :" + props.prop_value);
    return {};
  }

  render() {
    console.log("3. render Call");
    return <h2>[this is constructor function]</h2>;
  }
}
