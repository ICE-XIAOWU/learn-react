import React, { Component } from "react";

export class PropsSlot extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props;
    return (
      <div className='NavBar'>
        <div className='left'>{leftSlot}</div>
        <div className='center'>{centerSlot}</div>
        <div className='right'>{rightSlot}</div>
      </div>
    );
  }
}

export default PropsSlot;
