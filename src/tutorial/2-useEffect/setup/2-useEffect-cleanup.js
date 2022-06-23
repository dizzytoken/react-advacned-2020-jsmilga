import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

// we are going to set up an event listener on the window
// and as the window size changes, so does the value
const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth)

  // sets the size value to the innerwidth

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  // function that will run every resize
  // re renders every time we resize the window

  useEffect(()=>{
    console.log('Use Effect');
    window.addEventListener('resize', checkSize)

    //option of returning a func
    //before running the useEffect after the render we will run the cleanup function first 
    return ()=>{
    console.log('Cleanup');
    window.removeEventListener('resize', checkSize)
    } // will be invoked once we exir
  })
  console.log('Render');
  return <>
    <h1>Window</h1>
    <h2>{size} px</h2>
  </>;
};

export default UseEffectCleanup;

// check for the width of the window