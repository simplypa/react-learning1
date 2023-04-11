import React from 'react';
import PropTypes from 'prop-types';

function Button({ Name }) {
  const buttonHandler = () => {
    alert('Button Clicked');
  };

  return (
    <button onClick={buttonHandler} type="button">{Name}</button>
  );
}

Button.propTypes = {
  Name: PropTypes.string.isRequired,
};

export default Button;
