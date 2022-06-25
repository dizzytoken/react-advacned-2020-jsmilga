import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// when we deal with controlled inputs we will be hooking input with stateValue

// we can add onSubmit in the form or we can add onClick on the button 

// on change event listener will fire up every time we change something in the input


// ************************* LEARN DYNAMIC OBJECT PROPERTIES *****************************
const ControlledInputs = () => {

  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('')
  const [person, setPerson] = useState({id:'', firstName:'', email:'', age:''})
  const [nameArray, setNameArray] = useState([]);


  const handleChange =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, id: new Date().getTime().toString(), [name]: value})

  }

  const handleClick = (e) =>{
    e.preventDefault();
    if(person.firstName && person.age && person.email){

      setNameArray([...nameArray, person])
    }
  }
  return <>
  <article>
    <form className='form'>
      <div className='form-control'>
        <label htmlFor="firstName">Name : </label>
          <input type="text"
                 value={person.firstName}
                 id="firstName"
                 name="firstName"
                 onChange={handleChange}/>
      </div>
      <div className="form-control">

        <label htmlFor="email">Email : </label>
          <input  type="text"
                  value={person.email}
                  id="email"
                  name="email"
                  onChange={handleChange}/>


      </div>
      <div className="form-control">
        <label htmlFor="age">Age : </label>
        <input type="text"
               id="age"
               value={person.age}
               name="age"
               onChange={handleChange}
        />
      </div>
          <button type='submit' onClick={handleClick}> add person </button>
    </form>
  </article>

  {/*returns a div of classname item and an h4 and a p*/}
  {
    nameArray.map ((names)=>{
      return <div className="item" key={names.id}>
        <h4>Name : {names.firstName}</h4>
        <p>Email : {names.email}</p>
        <p>Age : {names.age}</p>
      </div>
    })
  }
  </>
};

export default ControlledInputs;
