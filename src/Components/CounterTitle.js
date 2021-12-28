import React from 'react'

function CounterTitle({title,counterValue}) {
    console.log(`${title} title rendered`)
    return (
        <div>
            {title} : {counterValue}
        </div>
    )
}
// React.memo says that,
// if this component state or props are changed then re-render this component
// otherwise dont re-render this component
export default React.memo(CounterTitle)
