import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter(dependencies list) :
// [] - (empty) only runs on the initial render
// [dependencyValue] - runs each and every time i change some kind of value that i put in as a dependencyValue

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call userEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('call userEffect only on initial render');
  }, []);

  console.log('render component');

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
