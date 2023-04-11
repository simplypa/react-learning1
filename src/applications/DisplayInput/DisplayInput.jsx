import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Display from './components/Display';

const DisplayInput = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    const newMessage = {
      id: uuidv4(), // 生成唯一的 id
      text: input,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <input type="text" onChange={inputHandler} />
      <button type="submit" onClick={submitButtonHandler}>Submit</button>
      <Display message={input} />
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>

    </div>
  );
};

export default DisplayInput;
