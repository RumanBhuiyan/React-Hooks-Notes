import React,{useContext} from 'react'
import {NameContext} from '../App'

function Context() {
    // Process : 02
    // extracting context value to use it to avoid nesting in render prop patterns below
    const {name,message} = useContext(NameContext)

    return (
        <div>
            {/* Process : 01 */}
            {/* consuming the value using the render prop patterns */}
            <NameContext.Consumer>
               {obj => 
               <div>
                   <span>Name : {obj.name}</span>
                   <span> Message: {obj.message}</span>
                </div>}
            </NameContext.Consumer>

            {/* Process : 02 consumers value */}
            <div>
                <span>Name : {name}</span>
                <span>Message : {message}</span>
            </div>
        </div>
    )
}

export default Context
