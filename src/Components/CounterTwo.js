import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterTwo() {

    const [counter,increment,decrement,reset] = useCounter(10,10)

    return (
        <div>
           <p>Counter :{counter}</p>
           <button onClick={increment}>Increment</button>
           <button onClick={decrement}>Decrement</button>
           <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
