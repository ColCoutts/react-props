import React from 'react';
import propTypes from 'prop-types';

function Color({ name, hex, red, green, blue }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name ? name : hex}<img id="color-block" src="https://www.colorhexa.com/9400d3.png"></img></dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>Red</dt>
      <dd>{red}</dd>

      <dt>Green</dt>
      <dd>{green}</dd>

      <dt>Blue</dt>
      <dd>{blue}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: propTypes.string.isRequired,
  hex: propTypes.string.isRequired,
  red: propTypes.number.isRequired,
  green: propTypes.number.isRequired,
  blue: propTypes.number.isRequired,
};

export default Color;
