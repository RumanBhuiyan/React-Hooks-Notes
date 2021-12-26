import React,{useState} from 'react'
import Clock from './Clock'

function Timer() {

    const [showTimer, setshowTimer] = useState(true)

    return (
        <div>
             {showTimer && <Clock />}
             <button onClick={()=>setshowTimer(showTimer=>!showTimer)}>Toggle Timer</button>
        </div>
    )
}

export default Timer
