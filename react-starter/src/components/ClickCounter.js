import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          CLicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClickCounter;
