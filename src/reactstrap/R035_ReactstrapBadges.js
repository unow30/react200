import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

export default class R035_ReactstrapBadges extends Component {
  render() {
    return (
      <div>
        <h1>
          PRODUCT NAME <Badge color="secondary">hit</Badge>
        </h1>
        <Button color="light" outline>
          Accessor <Badge color="dark">4</Badge>
        </Button>
        <br />
        <Badge color="danger" pill>
          pill
        </Badge>
        <br />
        <Badge href="http://example.com" color="light">
          goLink
        </Badge>
      </div>
    );
  }
}
