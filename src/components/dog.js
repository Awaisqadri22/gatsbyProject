import React from "react"
import { Jumbotron, Button } from "reactstrap"

export default ({ pageContext: { dog } }) => {
  return (
    <div>
      <Jumbotron style={{ borderColor: "green", borderWidth: "5px" }}>
        <h1 className="display-3">{dog.name}</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  )
}
