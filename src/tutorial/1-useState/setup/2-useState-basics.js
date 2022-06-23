import React, { useState } from 'react'; // useState is a named export
//useState function

  // console.log(useState("Hello World"));
   // useState() returns an array , which contains a value and a function which governs the value 
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

//   const [text, setText] = useState('Random Title') // destructuring

//   const handleClick = () =>{
//     if(text==='Random Title')
//         setText("Hello World")
//     if(text==='Hello World')
//         setText("Random Title")
//   }
//   return (
//     <React.Fragment>
//       <h2>{text}</h2>;
//       <button type='button' className='btn' onClick={handleClick}>Change Title </button>
//     </React.Fragment>
//   )
// };


const UseStateBasics = () => {

  const [text, setText] = useState('Random Title');

  const handleClick = () =>{
    if(text === "Random Title") setText('Hello')
    
    if(text === "Hello") setText('Random Title')
  }
  return(
  <React.Fragment>
    <h2>{text}</h2>
    <button type='button' className='btn' onClick={handleClick}>Change</button>
  </React.Fragment>
)}

export default UseStateBasics;
