import React,{useState} from 'react'

function UseStateWithArray() {

    const [number , setNumbers] = useState([5])

    // accessing previous state of the array before adding new item to the array because
    // its always safer
    function addNumber(){
        setNumbers(number => ([
            ...number,
            number[number.length-1]+5
        ]))
    }

    return (
        <div>
            <ul>
                {
                    number.map((item)=> <li key ={item}>{item}</li>)
                }
            </ul>
            <button onClick={addNumber}>Add Number</button>
        </div>
    )
}

export default UseStateWithArray
