import React from "react";
import HelloWorld from "../components/HelloWorld";

class App extends React.Component {
  // 类组件中唯一必须实现的方法
  render() {
    // 返回react元素
    // return <div>我是div</div>;
    // return <HelloWorld />;

    // 返回一个数组/fragment
    // return [1, 2, 3, 4];

    // 返回一个字符串/数值类型
    // return "hello world";
    // return 123;

    // 返回布尔值/null
    // return null;
    return true;
  }
}

export default App;
