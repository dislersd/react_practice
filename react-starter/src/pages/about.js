import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "The about page"
    };
  }

  componentDidMount() {
    this.setState({
      pageTitle: "About Page"
    });
  }

  render() {
    return <h2>{this.state.pageTitle}</h2>;
  }
}

export default About;
