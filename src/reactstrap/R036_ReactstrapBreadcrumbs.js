import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export default class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="#top">
            Go_top
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#middle">
            Go_middle
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#bottom">
            Go_bottom
          </BreadcrumbItem>
        </Breadcrumb>
        <div id="middle" style={{ marginTop: "500px" }}>
          <span>middle</span>
        </div>
        <div id="bottom" style={{ marginTop: "1000px" }}>
          <span>bottom</span>
        </div>
      </div>
    );
  }
}
