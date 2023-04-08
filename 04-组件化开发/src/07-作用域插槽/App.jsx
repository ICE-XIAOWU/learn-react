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

  getItemType(item) {
    if (item === "流行") return <button>{item}</button>;
    else if (item === "新款") return <h2>{item}</h2>;
    else return <i>{item}</i>;
  }

  render() {
    const { titles, tabIndex } = this.state;
    return (
      <div>
        <TabControl
          titles={titles}
          changeTab={(index) => this.changeTab(index)}
          itemType={(item) => this.getItemType(item)}
        />
        <h2>{titles[tabIndex]}</h2>
      </div>
    );
  }
}

export default App;
