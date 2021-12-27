import React, { useEffect, useRef } from 'react'

function MyInput() {
    // accessing DOM by ID or class in react isn't considered as good practise
    // so in that case useRef come into picture like below
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    const handleChange = () =>{
        console.log(inputRef.current.value)
    }

    return (
        <div>
           <input ref={inputRef} type="text" onChange={handleChange} />
        </div>
    )
}

export default MyInput
