import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const [text, setText] = useState('random title');
  const clickHandler = () => {
    setText('new Title')
  }
  return (
    <>
      <h2>{text}</h2>
      <button type='button' onClick = {clickHandler}>
        change title
      </button>
    </>
  
  );
};

export default UseStateBasics;
