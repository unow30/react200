import React, { Component } from "react";

export default class R008_LifecycleEx extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("1. constructor Call");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps call :" + props.prop_value);
    return { tmp_state: props.prop_value };
  }

  render() {
    console.log("3. render Call");
    return <h2>[this is shouldComponentUpdate function]</h2>;
  }

  componentDidMount() {
    console.log("4. componentDidMount Call");
    console.log("5. tmp_state : " + this.state.tmp_state);
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    console.log(
      "6. shouldComponentUpdate call / tmp_state2 = " + state.tmp_state2
    );
    return state.tmp_state2;
  }
}
