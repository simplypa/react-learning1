import React, { useState } from 'react';

import Display from './components/Display';

const DisplayInput = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
  };

  return (
    <div>
      <input type="text" onChange={inputHandler} />
      <button type="submit" onClick={submitButtonHandler}>Submit</button>
      <Display message={input} />
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>

    </div>
  );
};

export default DisplayInput;
