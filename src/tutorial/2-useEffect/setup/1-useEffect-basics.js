import React, { useState, useEffect } from 'react';

//allows us to do sude effects
//work outside of the component
//work could be changing document title 
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0); // use state preserved the value between renders 
  // and trigger the re render 
  useEffect(()=>{ // we pass in the callback function, which runs after every render
    console.log('call use effect');
    if(value > 0)
      document.title = `New Messages(${value})`
  }, [value]) // as a second arguement we can pass an areay ie an array of dependencies 
  // leaaving the array blank means it only runs on initial render
  // passing the value means when we change the dependency , the useEffect runs
  console.log('render component'); // even console log is considered a side effect
  // we can have as many useEffects as we want

  useEffect(()=>{
    console.log('hello world');
  }, [])
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={()=> setValue(value + 1)}> Click Me </button>
  </>;
};

export default UseEffectBasics;
