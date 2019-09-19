import React, { Component } from "react"
import { Spinner } from "reactstrap"

export default class MySpinner extends React.Component {
  constructor() {
    super()
    this.state = {
      showSpinner: true,
    }
  }

  render() {
    return (
      <div
        style={{ marginLeft: "50%", paddingTop: "200px", marginRight: "50%" }}
      >
        {this.state.showSpinner && (
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        )}
      </div>
    )
  }
}
