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

    this.btnClick = this.btnClick.bind(this);
  }

  btnClick() {
    console.log("btnClick");
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
