import React from 'react';
import propTypes from 'prop-types';

function Dog({ name, age, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <dt>Weight</dt>
      <dd>{weight}</dd>
    </dl>
  );
  
}

Dog.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  weight: propTypes.string.isRequired
};

export default Dog;
