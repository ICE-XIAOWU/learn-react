import React, { Component } from "react";

export class Children extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className='NavBar'>
        <div className='left'>{children[0]}</div>
        <div className='center'>{children[1]}</div>
        <div className='right'>{children[2]}</div>

        {/* <div>{children}</div> */}
      </div>
    );
  }
}

export default Children;
