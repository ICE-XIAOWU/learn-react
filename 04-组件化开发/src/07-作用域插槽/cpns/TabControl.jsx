import React, { Component } from "react";
import "./style.css";

export class TabControl extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
    };
  }

  changeTab(currentIndex) {
    this.setState({ currentIndex });
    this.props.changeTab(currentIndex);
  }

  render() {
    const { titles, itemType } = this.props;
    const { currentIndex } = this.state;
    return (
      <div>
        <div className='container'>
          {titles.map((item, index) => {
            return (
              <div
                className={`item ${index === currentIndex ? "active" : ""}`}
                key={item}
                onClick={() => this.changeTab(index)}
              >
                <span className='text'>{itemType(item)}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TabControl;
