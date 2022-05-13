import React from "react";
// import ReactstrapCollapse from "./reactstrap/R042_ReactstrapCollapse";
// import ReactstarpFade from "./reactstrap/R043_ReactstarpFade";
// import ReactstrapForm from "./reactstrap/R044_ReactstrapForm";
import ListGroup from "./reactstrap/R047_ReactstrapListGroup";
import Modal from "./reactstrap/R048_ReactstrapModal";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <h1>start react 200</h1>
      <p>css 적용하기</p>
      <ListGroup />
      <Modal />
      {/* <ReactstrapCollapse />
      <ReactstarpFade />
      <ReactstrapForm /> */}
    </div>
  );
}
