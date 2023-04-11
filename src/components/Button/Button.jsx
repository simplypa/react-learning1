import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ ButtonName }) => {
  const buttonHandler = (msg) => {
    alert(`${msg} Button Clicked`);
  };

  return (
    <button onClick={() => (buttonHandler({ ButtonName }))} type="button">{ButtonName}</button>
  );
};

Button.propTypes = {
  ButtonName: PropTypes.string.isRequired,
};

export default Button;
