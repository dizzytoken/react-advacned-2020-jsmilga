import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'peter', age:24, message:'random message'})

  const changeMessage = () =>{
    // if we directly call the state function, the object will be replaced by a string
    // solution is spread operator

    setPerson({...person, message:'Hello World'}) // this allows to leave the rest of the object as it was
    // and change only the message property
  }

  const changeName = () => {
    if(person.name === 'peter')
      setPerson({...person, name:'Debjyoti'})
    if(person.name=== 'Debjyoti')
      setPerson({...person, name:'peter'})
  }
  const changeAge = () =>{
    if(person.age=== 24)
      setPerson({...person, age:21})
    if(person.age=== 21)
      setPerson({...person, age:24})
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>change message</button>
    <button className='btn' onClick={changeName}>change name</button>
    <button className='btn' onClick={changeAge}>change age</button>
  </>;
};

export default UseStateObject;
