import React, { Component } from "react";
import Home from "./Home";
import ThemeContext from "./contexts/theme-context";
import UserContext from "./contexts/user-context";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      info: {
        name: "Ross",
        age: 30,
      },
    };
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        {/* 嵌套使用Context */}
        <UserContext.Provider value={{ color: "red", theme: "dark" }}>
          <ThemeContext.Provider value={info}>
            <Home />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
