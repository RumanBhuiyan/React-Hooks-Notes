import React,{useReducer} from 'react'

// step-01 : create your initialState Object first 
const initialState = {
    counter : 0
}
// step-02 : create reducer function secondly
const reducer = (state,action) =>{
    switch (action.type){
        case 'increment' :
            return {counter: state.counter + action.payload}
        case 'decrement' :
            return {counter: state.counter - action.payload}
        case 'reset' :
            return initialState
        default :
            return state 
    }
}

function CounterTwo() {
    // step-03 : destructure store from initialState and dispatch from reducer
    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Counter : {store.counter}</p>
           <button onClick={()=>dispatch({type:'increment',payload:5})}>Increment 5</button>
           <button onClick={()=>dispatch({type:'decrement',payload:5})}>Decrement 5</button>
           <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
