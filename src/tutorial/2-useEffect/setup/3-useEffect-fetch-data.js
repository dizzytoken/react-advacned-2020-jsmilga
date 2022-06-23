import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argurement


const UseEffectFetchData = () => {
  const[users, setUsers] = useState([])

  const getUsers = async () =>{

    const response = await fetch(url);
    const users = await response.json();
    setUsers(users) //--> we are essentially stuck in an infinite loop
    // console.log(users);
  }

  useEffect(()=>{

    getUsers() // we trigget re render 
  }, [])

  /*
  if we have some kind of functionality within a function whether that is a callback
  function or within one of the functions, it we are triggering re render , make sure to 
  run re render 
  */
  return <>
    <h3>GitHub Users</h3>
    
    <ul className="users">
      {users.map((user)=>{
        const {id, login, avatar_url, html_url} = user
        return <li key={id}>
          <img src={avatar_url} alt={login} />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </div>
        </li>
      })}

    </ul>
  </>;
};

export default UseEffectFetchData;
