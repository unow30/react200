import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class R048_ReactstrapModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
    this.response = { item: "리스폰데이터" };
  }

  toggle = (e) => {
    this.setState({ modal: !this.state.modal });
  };
  /**
   * setState 반복을 막으려면?
   */
  render() {
    return (
      <>
        <Button color="warning" onClick={this.toggle}>
          모달버튼
        </Button>
        <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal Header</ModalHeader>
          <ModalBody>모달 바디 내용: {this.response["item"]}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              확인
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              닫기
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default R048_ReactstrapModal;
