import React,{useState,useEffect} from 'react'

function Clock() {
    const [counter, setCounter] = useState(0)

    // this type of useEffect can work as componentWillUnmount()
    useEffect(()=>{
        // creating a clock 
        const interval = setInterval(()=>{
            setCounter(counter => counter + 1)
        },1000)
        // this returning function will be executing at the time of unmounting
        return ()=>{
            clearInterval(interval)
        }
    },[])

    return (
        <div>
            <p>Count : {counter}</p>
        </div>
    )
}

export default Clock
