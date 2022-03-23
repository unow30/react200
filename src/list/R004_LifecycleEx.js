import React, { Component } from "react"; // import 로 useState 를 불러온다!

class R004_LifecycleEx extends Component {
  constructor(props) {
    console.log("1. constructor call");
    super(props);
    this.state = { myvalue: 109 };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps call");
    console.log(props);
    console.log(state);
    console.log("return changedstate");
    return { temp_state: props.prop_value };
  }

  componentDidMount() {
    console.log("4. componentDidMount call");
    console.log("5. temp_state is " + this.state.temp_state);
  }

  render() {
    console.log("3. render Call");
    return <h2>[this is Render Function]</h2>;
  }
}

export default R004_LifecycleEx;
