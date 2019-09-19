import React from "react"
import FiestaImg from "../assets/pic4.jpg"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"

const Example = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <Card className="rounded mx-auto d-block" style={{ maxWidth: "400px" }}>
          <CardImg src={FiestaImg} alt="Card image cap" />
          <CardBody>
            <strong>
              <CardTitle>Card title</CardTitle>
            </strong>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button className="rounded mx-auto d-block ">Button</Button>
          </CardBody>
        </Card>
      </div>

      <div>
        <Card className="rounded mx-auto d-block" style={{ maxWidth: "400px" }}>
          <CardImg src={FiestaImg} alt="Card image cap" />
          <CardBody>
            <strong>
              <CardTitle>Card title</CardTitle>
            </strong>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button className="rounded mx-auto d-block ">Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Example
