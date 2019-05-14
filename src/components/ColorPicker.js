import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    color: propTypes.array.isRequired
  }

  colors = ['red', 'blue', 'green'];

//eslint-disable-next-line no-unused-vars 
clickHandlerRed = event => {
  console.log(this.colors[0]);
}
//eslint-disable-next-line no-unused-vars 
clickHandlerBlue = event => {
  console.log(this.colors[1]);
}
//eslint-disable-next-line no-unused-vars 
  clickHandlerGreen = event => {
    console.log(this.colors[2]);
  }

  render() {
    return (
      <> 
        <button className="red" onClick={this.clickHandlerRed}>{this.props.color[0]}</button>
        <button className="blue" onClick={this.clickHandlerBlue}>{this.props.color[1]}</button>
        <button className="green" onClick={this.clickHandlerGreen}>{this.props.color[2]}</button>
      </>
    );
  }
}
