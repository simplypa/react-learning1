import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Button({ Name }) {
  const [name, setName] = useState(Name);

  const buttonHandler = (msg) => {
    alert(`${msg} Button Clicked`);
    setName('名字已经改变了');
  };

  return (
    <button onClick={() => (buttonHandler({ Name }))} type="button">{name}</button>
  );b 
}

Button.propTypes = {
  Name: PropTypes.string.isRequired,
};

export default Button;
