import { useState } from 'react'

function useCounter(initialValue = 0 ,value) {

    const [counter,setCounter]= useState(initialValue)

    const increment = () => setCounter(counter => counter + value)
    const decrement = () => setCounter(counter => counter - value)
    const reset = () => setCounter(initialValue)

    return [counter,increment,decrement,reset]
}

export default useCounter
