import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ message }) => (
  <div className="display">{message}</div>
);
Display.propTypes = {
  message: PropTypes.string,
};

Display.defaultProps = {
  message: 'No Input yet',
};
export default Display;
