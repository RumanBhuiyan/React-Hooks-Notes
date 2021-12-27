import React,{useContext} from 'react'
import { Globalcontext } from '../App'


function CounterThree() {
    // step-05 : destructure parent state & parent dispatch to use
   const {parentState,parentDispatch } = useContext(Globalcontext)

    return (
        <div>
           <p>Counter : {parentState.globalCounter}</p>
           <button onClick={()=>parentDispatch({type:'increment',payload:10})}>Increment 10</button>
           <button onClick={()=>parentDispatch({type:'decrement',payload:10})}>Decrement 10</button>
           <button onClick={()=>parentDispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default CounterThree
