import React, { Component } from "react";
import { Button, Fade } from "reactstrap";

class R043_ReactstrapFade extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeInOut: true };
  }

  toggle = (e) => {
    this.setState({ fadeInOut: !this.state.fadeInOut });
  };

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>
          Fade In/out
        </Button>
        <Fade in={this.state.fadeInOut} tag="h1">
          abcdefg
        </Fade>
      </div>
    );
  }
}

export default R043_ReactstrapFade;
