import React, { useState } from 'react';
//method to pass functions
const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () =>{
    setValue(0)
  }

  const complexIncrease = () =>{
    setTimeout(()=>{
      // setValue(value +1) // the setValue funtion is asynchronous so even if we click 3 times, it still thinks the value is 0
      setValue((prevState)=>{
        return prevState + 1;
      })
    }, 2000)
  }
  return  <>
    <section style={{margin:'4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={()=> setValue(value-1)}> decrease</button>
      <button className='btn' onClick={reset}> reset</button>
      <button className='btn' onClick={()=> setValue(value + 1)}> increase</button>
    </section>
    <section style={{margin:'4rem 0'}}>
      <h2>more complex counter</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={complexIncrease}>Increase later</button>
    </section>
  </>;
};

export default UseStateCounter;
