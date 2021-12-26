import React,{useState} from 'react'

function UseStateWithObject() {

    const [name , setName] = useState({firtname: '',lastname:''})

    function handleFirstName(event){
        // using spread operator ...name to restore all keys from name object then modify the value
        // of firstname key 
        setName({
            ...name,
            firtname:event.target.value
        })
    }

    // using spread operator ...name to restore all keys from name object then modify the value
    // of lastname key 
    function handleLastName(event){
        setName(name =>({
            ...name,
            lastname : event.target.value
        }))
    }

    return (
        <div>
            <p>{name.firtname}</p> <p>{name.lastname}</p>
            <input type="text" value={name.firtname} onChange={(e)=>handleFirstName(e)} />
            <input type="text" value={name.lastname} onChange={(e)=>handleLastName(e)} />
        </div>
    )
}

export default UseStateWithObject
