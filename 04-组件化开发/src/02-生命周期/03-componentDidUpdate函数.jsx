import React from "react";

class App extends React.Component {
  // constructor构造函数
  constructor() {
    console.log("这里是constructor构造函数");
    super();

    this.state = {
      name: "Rose",
      age: 24,
    };
  }

  // 挂载之后的生命函数
  componentDidMount() {
    this.setState({ name: "Rich" });
    console.log("这里是componentDidMount函数");
  }

  // 更新dom之后的生命函数
  componentDidUpdate() {
    console.log("这里是componentDidUpdate函数");
  }

  handleAgeChange() {
    console.log("执行handleAgeChange函数");
    this.setState({ age: 18 });
  }

  // 更新函数
  render() {
    console.log("这里是render函数");
    const { name, age } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <div>{age}</div>

        <button onClick={() => this.handleAgeChange()}>更新年龄</button>
      </div>
    );
  }
}

export default App;
