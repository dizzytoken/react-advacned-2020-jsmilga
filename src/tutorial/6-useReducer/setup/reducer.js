export const reducer = (state, action) =>{
    if(action.type === 'ADD_ITEM'){
      const newItems =[...state.people, action.payload]
      return {...state, 
        people: newItems, 
        isModalOpen:true, 
        modalContent:'item added'}
    }
    if(action.type==='ITEM_MISSING'){
      return{
        ...state,
        isModalOpen:true,
        modalContent:'item missing'
      }
    }
    if(action.type==='CLOSE_MODAL'){
      return {
        ...state,
        isModalOpen:false
      }
    }
    if(action.type==='REMOVE_ITEM'){
      const newPeople = state.people.filter((person)=> person.id!==action.payload)
      return {...state, people:newPeople, modalContent:'item removed'}
    }
    throw new Error('no matching action type')
  } // reducer is essentially the function that will manipulate the state
  // we have to return the state 