import React, { Component } from "react";
import { Table } from "reactstrap";

export default class R054_ReactstrapTable extends Component {
  render() {
    /* <Table dark bordered> */
    /* <Table striped hover> */

    /* <Table borderless size="sm"> */

    return (
      <Table dark bordered>
        <thead>
          <tr>
            <th>number</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>react100</td>
            <td>w10000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>react200</td>
            <td>w20000</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
