import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import styles from './style.modules.css';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    //ask questions about array isRequired and undefined
    color: propTypes.array
  }

  colors = ['red', 'blue', 'green'];

clickHandlerRed = () => {
  console.log(this.colors[0]);
}

clickHandlerBlue = () => {
  console.log(this.colors[1]);
}

clickHandlerGreen = () => {
  console.log(this.colors[2]);
}

render() {
  return (
    <div> 
      <button className={styles.red} onClick={this.clickHandlerRed}>{'red'}</button>
      <button className={styles.blue} onClick={this.clickHandlerBlue}>{'blue'}</button>
      <button className={styles.green} onClick={this.clickHandlerGreen}>{'green'}</button>
    </div>
  );
}
}
