import React from "react";

class HelloWorld extends React.Component {
  // 卸载生命函数
  componentWillUnmount() {
    console.log("这里是 HelloWorld componentWillUnmount函数");
  }

  render() {
    return <h2>我是HELLO WORLD组件</h2>;
  }
}

export default HelloWorld;
