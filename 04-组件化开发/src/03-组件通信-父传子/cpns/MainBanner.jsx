import React, { Component } from "react";
import PropTypes from "prop-types";

export class MainBanner extends Component {
  // 新写法 ES2022 出现的 class public static fields.
  static defaultProps = {
    banners: [],
    title: "默认标题",
  };

  render() {
    const { banners, title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {banners.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// 设置默认的props值 -- 写法一，最多人用
// MainBanner.defaultProps = {
//   banners: [],
//   title: "默认标题",
// };

// 设置传入的props类型
MainBanner.propTypes = {
  banners: PropTypes.array,
  title: PropTypes.string,
};

export default MainBanner;
