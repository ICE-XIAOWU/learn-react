import React, { Component } from "react";
import ThemeContext from "./contexts/theme-context";
import UserContext from "./contexts/user-context";

export class HomeBanner extends Component {
  render() {
    const { name, age } = this.context;
    return (
      <div>
        <h1>Home Banner组件</h1>
        <h2>名字：{name} </h2>
        <h3>年龄: {age}</h3>
        <UserContext.Consumer>
          {({ color, theme }) => (
            <div>
              <h2>{color}</h2>
              <h3>{theme}</h3>
            </div>
          )}
        </UserContext.Consumer>{" "}
      </div>
    );
  }
}

HomeBanner.contextType = ThemeContext;

export default HomeBanner;
