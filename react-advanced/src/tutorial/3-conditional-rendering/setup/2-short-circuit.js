import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // truthy value will be returned. If first value truthy-it will be circuit evaluated and returned, if not-it will return the second value
  // const secondValue = text && 'hello world';
  // if first value is truthy-second value will be returned, but if falsy-first value will be returned

  return (
    <>
      {/* <h1>OR value: {firstValue}</h1>
      <h1>AND value: {secondValue}</h1> */}
      {/* {if(){}}</>;    
      //Will be an error because 'if' doesn't return the value*/}
      <h1>{text || 'default value'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {text && <h1>hello world</h1>}
      {!text && <h1>hello world</h1>} */}
      {/* {isError && <h1>Error</h1>} */}
      {isError ? (
        <h1>Error</h1>
      ) : (
        <div>
          <h1>there is no error</h1>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
