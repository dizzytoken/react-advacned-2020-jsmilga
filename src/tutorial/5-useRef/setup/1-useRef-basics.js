import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  // we need to use this refContainer value and then set it equal to a ref attribute 
  const refContainer = useRef(null); // refContainer is an object with a property of current

  const divCon = useRef(null);


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(refContainer.current.value); // current returns the input and current.value returns
                                            // the value that is given in the input 
    console.log(divCon.current);
  }

  useEffect(()=>{
    console.log(refContainer.current);
    refContainer.current.focus();
  }) // in this case we need not call the dependecy array as there will be no re-renders
  return <>
  <form className="form" onSubmit={handleSubmit}>
    
  <div>
    <input type="text" ref={refContainer}/>
    <button type='submit'> Submit </button>
  </div>
  <div ref={divCon}>Hello World</div>
  </form>
  </>;
};

export default UseRefBasics;
