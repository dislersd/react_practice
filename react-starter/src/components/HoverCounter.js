import React, { Component } from "react";
import withCounter from "../HOC/withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <h2 onMouseOver={incrementCount}>
          {" "}
          {name} hovered {count} times
        </h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 10);
