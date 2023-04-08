import React, { Component } from "react";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件</h2>
        <HomeBanner />
        <HomeProduct />
      </div>
    );
  }
}

export default Home;
