import React, { useState } from 'react';

const DisplayInput = () => {
  [message, setMessage] = useState('');
  
  return (
    <div>
      <input type="text" />
    </div>
  );
};

export default DisplayInput;
