import React, { Component } from "react";
import ClickCounter from "../components/ClickCounter";
import HoverCounter from "../components/HoverCounter";

class Count extends Component {
  render() {
    return (
      <div>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default Count;
