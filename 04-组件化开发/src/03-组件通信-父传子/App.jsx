import React from "react";

import Header from "./cpns/Header";
import Main from "./cpns/Main";
import Footer from "./cpns/Footer";

class App extends React.Component {
  // 更新函数
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
