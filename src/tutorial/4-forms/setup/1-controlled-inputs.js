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
  const [nameArray, setNameArray] = useState([]);
  const handleClick = (e) =>{
    e.preventDefault();
    if(firstName && email){
      const data = {id: new Date().getTime().toString(), firstName, email}
  
      setNameArray((nameArray)=>{
        return [...nameArray, data]
      })
      setFirstName('')
      setEmail('')
    }
    else{
      console.log('insufficient data');
    }
  }
  return <>
  <article>
    <form className='form' onSubmit={handleClick}>
      <div className='form-control'>
        <label htmlFor="firstName">Name : </label>
          <input type="text"
                 value={firstName}
                 id="firstName"
                 name="firstName"
                 onChange={(e)=> setFirstName(e.target.value)}/>
      </div>
      <div className="form-control">

        <label htmlFor="email">Email : </label>
          <input  type="text"
                  value={email}
                  id="email"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}/>


      </div>
          <button type='submit'> add person </button>
    </form>
  </article>
  {

    nameArray.map((names)=>{

      return <div key={names.id} className="item">
        <h4>{names.firstName}</h4>
        <p>{names.email}</p>
      </div>
    })
  }
  </>
};

export default ControlledInputs;
