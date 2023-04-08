import React, { Component } from "react";
import Home from "./Home";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "Ross",
        age: 20,
      },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        {/* 最新语法支持，以前不太支持，这个就类似于展开运算符 */}
        <Home {...info} />
      </div>
    );
  }
}

export default App;
