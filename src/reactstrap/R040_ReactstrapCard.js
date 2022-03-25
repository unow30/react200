import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            height="200px"
            src="https://www.shutterstock.com/image-vector/set-squared-golden-vintage-wooden-frame-1915929097"
            alt="Card image"
          >
            <CardBody>
              <CardTitle>Card 제목</CardTitle>
              <CardSubtitle>Card 부제목</CardSubtitle>
              <CardText>Card 내용 adaddafe</CardText>
              <Button>버튼</Button>
            </CardBody>
          </CardImg>
        </Card>
      </div>
    );
  }
}
