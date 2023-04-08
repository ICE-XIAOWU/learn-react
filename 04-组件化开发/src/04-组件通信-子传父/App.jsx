import React, { Component } from "react";
import AddCounter from "./AddCount";
import SubCount from "./SubCount";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 100,
    };
  }

  changeCount(count) {
    this.setState({
      count: this.state.count + count,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>当前计数：{count}</h2>
        <AddCounter addCount={(num) => this.changeCount(num)} />
        <SubCount subCount={(num) => this.changeCount(-num)} />
      </div>
    );
  }
}

export default App;
