import React from "react";
import HelloWorld from "../components/HelloWorld";

class App extends React.Component {
  // constructor构造函数
  constructor() {
    console.log("这里是constructor构造函数");
    super();

    this.state = {
      name: "Rose",
      age: 24,
      isShowHelloWorld: true,
    };
  }

  // 挂载之后的生命函数
  componentDidMount() {
    this.setState({ name: "Rich" });
    console.log("这里是componentDidMount函数");
  }

  // 更新dom之后的生命函数
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("这里是componentDidUpdate函数", prevProps, prevState, snapshot);
  }

  shouldComponentUpdate() {
    // 不更新
    return false;
  }

  handleIsShowHelloWorld() {
    console.log("执行handleIsShowHelloWorld函数");
    this.setState({ isShowHelloWorld: false, name: "Hello World" });
  }

  // 更新函数
  render() {
    console.log("这里是render函数");
    const { name, age, isShowHelloWorld } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <div>{age}</div>

        <button onClick={() => this.handleIsShowHelloWorld()}>切换</button>
        {isShowHelloWorld && <HelloWorld />}
      </div>
    );
  }
}

export default App;
