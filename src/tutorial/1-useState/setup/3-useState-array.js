import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) =>{
    let newPeople = people.filter((person)=> person.id !== id);
    setPeople(newPeople)
  }
  return <>
  {
    people.map((person)=>{
      const {id, name} =person;
      return <div key={id} className='item'>
          <h4>{name}</h4>
          <button onClick={()=> removeItem(id)}>remove</button>
      </div>
    })
  }
  <button className='btn' onClick={()=>setPeople([])}>
    Clear Items  
  </button> {/*we can invoke the function setPeople in here but since we have to 
  pass the value we have to pass an arrow function instead
  The problem when we just pass the setPeople is that we right away invoke it 
  but thats not something we want.
  We want to invoke it only when we click on the button and so in this case,
  we have to pass an arrow function like onClick={()=>setPeople[]}
  */}
  </>;
};

export default UseStateArray;
