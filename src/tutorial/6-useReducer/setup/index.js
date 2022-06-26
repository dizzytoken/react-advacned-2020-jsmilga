import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function



/*
we have a state which is an object and has multiple properties
*/

const Index = () => { 
  
  const defaultState ={
    people:[],
    isModalOpen: false,
    modalContent: 'hello world'
  }
  const [state, dispatch] = useReducer(reducer, defaultState) // we get state value and dispatch function
  
  // reducer function takes in old state and the action and spits back new state
  const [name, setName] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name){
      const newItem ={id: new Date().getTime().toString(), name}
      dispatch({type:'ADD_ITEM', payload:newItem}) // once we dispatch then in reducer we need to handle it 
      setName('')
    }
    else{
      dispatch({type:'ITEM_MISSING'})
    }
  }
  const closeModal = ()=>{
    dispatch({type:'CLOSE_MODAL'})
  }
  return <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
      
        <button type='submit'>add</button>
      </form>
      {state.people.map((person)=>{
        return <div key={person.id} className='item'>
          <h4>{person.name}</h4>
          <button onClick={()=> dispatch({type:'REMOVE_ITEM', payload:person.id})}>remove</button>
        </div>
      })}
  </>
};

export default Index;
