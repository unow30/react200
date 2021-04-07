import React, { Component } from "react";

export default class R017_Props extends Component {
  render() {
    let { props_val } = this.props;
    props_val += "from App.js";
    return <div>{props_val}</div>;
  }
}
