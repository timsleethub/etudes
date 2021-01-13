import React, { useState } from 'react';
// useState - function
// all hooks start with 'use'
// must be in the function/component body
// component name must be uppercase
// cannot call conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  //state value, function that controls value
  //useState(default value)

  const handlerClick = () => {
    if (text === 'random title') {
      setText('hello World');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handlerClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
