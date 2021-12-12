import React, { Component } from "react";
import { render } from "react-dom";
import ProgressbarLine from "./progressbarline";

const divStyle = {
  textAlign: 'center'
};

export default class Progressbar extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <div style={divStyle }>
          <img
            alt={this.props.alttext}
            src={this.props.imageUrl}
            height={this.props.height}
            width={this.props.width}
            align={this.props.alignment}
          />
        </div>
      );
    }

    return null;
  }
}
