import React from 'react'

function CounterButton({title,func}) {
    console.log(`${title} Button rendered`)
    return (
        <div>
           <button onClick={func}>{title}</button>
        </div>
    )
}

// React.memo says that,
// if this component state or props are changed then re-render this component
// otherwise dont re-render this component but this can't prevent button re-render
// because in every render of App.js incrementByOne and incrementByTwo functions are
// created again & again so props change thats why button renderend and React.memo
// can't handle it. For handling that we need to memorise those functions by using 
// use callback hook
export default React.memo(CounterButton)
