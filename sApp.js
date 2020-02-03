import React, { Component } from "react";
import AppRoute from "./src/config/routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <AppRoute />;
  }
}

export default App;
