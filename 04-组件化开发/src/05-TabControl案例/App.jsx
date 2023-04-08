import React, { Component } from "react";
import TabControl from "./cpns/TabControl";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      tabIndex: 0,
      titles: ["流行", "新款", "新品"],
    };
  }

  changeTab(tabIndex) {
    this.setState({ tabIndex });
  }

  render() {
    const { titles, tabIndex } = this.state;
    return (
      <div>
        <TabControl
          titles={titles}
          changeTab={(index) => this.changeTab(index)}
        />
        <h2>{titles[tabIndex]}</h2>
      </div>
    );
  }
}

export default App;
