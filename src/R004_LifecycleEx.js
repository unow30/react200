import React, { Component } from "react"; // import 로 useState 를 불러온다!

class R004_LifecycleEx extends Component {
  render() {
    console.log("3. render Call");
    return <h2>[this is Render Function]</h2>;
  }
}

export default R004_LifecycleEx;
