import React,{useState} from 'react'

function Counter() {
    // rule : 01 Declare  useState hook at top level like this
    // rule : 02 Don't try to use useState hook inside class component
    const [counter,setCounter] = useState(0)

    // accessing previous state before modifying for safety
    const incrementCounter = () =>{
        setCounter(counter => counter + 1)
    }

    const decrementCounter = () =>{
        setCounter(counter => counter - 1)
    }

    const resetCounter = () =>{
        setCounter(0)
    }

    return (
        <div>
            <p>clicked {counter} times</p>
            <button onClick={resetCounter}>Reset</button>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={decrementCounter}>Decrement</button>
        </div>
    )
}

export default Counter
