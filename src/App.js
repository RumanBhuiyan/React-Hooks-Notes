import React,{useReducer}  from "react";
import Counter from "./Components/Counter";
import CounterThree from "./Components/CounterThree";
import CounterTwo from "./Components/CounterTwo";

// though useState & useReducer hook are made for state management but useState
// hook is mainly used for local state management like Number,Boolean,Array type
// on the other hand useReducer hook is used for complex state management like
// global state management and working with object and multiple actions on them etc
// useReducer + useContext = Redux (it is said)

// step-01 : create a global state first
const globalState = {
  globalCounter : 0
}
// step-02 : create a reducer to pass into children to give the ability to modify state
const globalReducer = (state,action) => {
  switch(action.type){
    case 'increment':
      return {globalCounter : state.globalCounter + action.payload}
    case 'decrement':
      return {globalCounter : state.globalCounter - action.payload}
    case 'reset':
      return globalState
    default :
      return state
  }
}
// step-03 : create a context to pass the state to children
export const Globalcontext = React.createContext()

function App() {
  // step-04 : destructure state & dispatch to pass to children
  const [state,dispatch] = useReducer(globalReducer,globalState)

  return (
    <div >
     <Counter/>     
     <CounterTwo />
     <Globalcontext.Provider value={{parentState:state,parentDispatch:dispatch}}>
       <CounterThree />
     </Globalcontext.Provider>
    </div>
  );
}

export default App;
