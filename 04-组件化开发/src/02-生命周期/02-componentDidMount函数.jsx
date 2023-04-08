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

  // 挂载之后的声明函数
  componentDidMount() {
    this.setState({ name: "Rich" });
    console.log("这里是componentDidMount函数");
  }

  render() {
    console.log("这里是render函数");
    const { name, age } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <div>{age}</div>
      </div>
    );
  }
}

export default App;
