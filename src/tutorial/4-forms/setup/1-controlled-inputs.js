import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// when we deal with controlled inputs we will be hooking input with stateValue

// we can add onSubmit in the form or we can add onClick on the button 

// on change event listener will fire up every time we change something in the input



const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault(); // prevents the default function of refreshing the browser after submitting form
    if(firstName && email){
      const person ={
        id: new Date().getTime().toString(),
        firstName,
        email
      }
      setPeople((people)=>{
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
      console.log(person);
    }
    console.log('empty values');
  }
  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name : </label> {/*htmlFor is used to connect a label with an input*/}
          <input 
          type="text" 
          id='firstName' 
          name='firstName' 
          value ={firstName}
          onChange={
            (e)=>setFirstName(e.target.value)
          }
          /> {
            /*
            add two attributes --> one - value and another - event listener
            */
          }
        </div>
        <div className="form-control">
          <label htmlFor="email">Email : </label> {/*htmlFor is used to connect a label with an input*/}
          <input 
          type="text" 
          id='email' 
          name='email' 
          value={email}
          onChange={
            (e)=>{
              setEmail(e.target.value)
            }
          }/>
        </div>
        <button type='submit'>add person</button>
      </form>{people.map((person)=>{

        const {id, firstName, email} = person
        return <div key={id} className="item">
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })}
    </article>
  </>;
};

export default ControlledInputs;
