import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');
  // const firstValue = text || 'hello world'; // returns first value
  // const secondValue = text && 'hello world'; // returns second if the text is truth
  const [isError, setIsError] = useState(false)
  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

    <h1>{text || "Debj"}</h1>
    <button className='btn' onClick={()=> setIsError(!isError)}> Toggle Error </button>
    {isError && <h1>Error ... </h1>} {/*with binary operator we only display one, but with ternary we can
    display something if it is true and something else if it is false */}
    {isError? <p>there is error ...</p> : <div>
        <h2>there is no error ... </h2>
      </div>}
  </>;
};

export default ShortCircuit;
