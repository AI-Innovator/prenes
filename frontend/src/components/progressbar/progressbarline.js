import React, { Component } from 'react';
import { render } from 'react-dom';

export class ProgressbarLine extends React.Component {

  render() {

    return (
            <div>
                <img alt={this.props.alttext} src={this.props.imageUrl} height={this.props.height} width={this.props.width} align={this.props.alignment} />
            </div>
          );
  }

}

export default ProgressbarLine;