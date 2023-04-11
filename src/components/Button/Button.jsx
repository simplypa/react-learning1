import React from 'react';
import PropTypes from 'prop-types';

function Button({ Name }) {
  const buttonHandler = (msg) => {
    alert(`${msg} Button Clicked`);
  };

  return (
    <button onClick={() => (buttonHandler({ Name }))} type="button">{Name}</button>
  );
}

Button.propTypes = {
  Name: PropTypes.string.isRequired,
};

export default Button;
