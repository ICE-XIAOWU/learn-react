import React, { Component } from "react";
import Children from "./Children";
import PropsSlot from "./PropsSlot";
import "./style.css";

export class App extends Component {
  render() {
    return (
      <div>
        {/* children实现 */}
        <Children>
          {/* 如果里面的内容不止一个元素，则children为一个数组 */}
          <button>左边</button>
          <h2>中间内容</h2>
          <i>右边内容</i>

          {/* 里面内容为一个元素，children就是元素本身 */}
          {/* <h2>只有一个元素</h2> */}
        </Children>

        {/* props实现 */}
        <PropsSlot
          leftSlot={<button>左边</button>}
          centerSlot={<h2>中间内容</h2>}
          rightSlot={<i>右边</i>}
        />
      </div>
    );
  }
}

export default App;
