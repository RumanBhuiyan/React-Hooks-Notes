import React,{useReducer} from 'react'

// step-01 : create your initialState first 
const initialState = 0
// step-02 : create reducer function secondly
const reducer = (state,action) =>{
    switch (action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default :
            return state 
    }
}

function Counter() {
    // step-03 : destructure store from initialState and dispatch from reducer
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
           <p>Counter : {store}</p>
           <button onClick={()=>dispatch('increment')}>Increment</button>
           <button onClick={()=>dispatch('decrement')}>Decrement</button>
           <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Counter
