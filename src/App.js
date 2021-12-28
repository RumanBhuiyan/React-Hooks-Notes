import React,{useCallback, useMemo, useState}  from "react";
import CounterButton from "./Components/CounterButton";
import CounterTitle from "./Components/CounterTitle";

function App() {

  const[counterOne,setCounterOne] = useState(0)
  const[counterFive,setCounterFive] = useState(0)

  // using [] i am telling react that build the method inside useCallback just once and
  // memorise it for always and don't create instance of this method again and again
  // in every render rather use this memorised function.if i mention [counterOne] like this
  // then react will re-create this function if any changes happend to counterOne
  const incementByOne = useCallback(() => setCounterOne(counterOne => counterOne +1),[])
  const incementByFive =useCallback(() => setCounterFive(counterFive => counterFive +5),[]) 

  const isEven =useMemo( () => {
    // lets assume below operation as costly or time consuming operation which slows down both 
    // first span tag  outcome and operation of second increment button too. but its not expected.
    // at the time of clicking second increment buttton, using useMemo hook we are telling react
    // cashed counterOne value and use it at the time of render insted of re-calculating it again
    // so dont slow down operation of second increment button, and perform this function agian only if
    // any changes happend to [counterOne]
    let i =1 
    while (i < 1000000000) i +=1 
    return counterOne %2 === 0
  },[counterOne])

  return (
    <div >
     <CounterTitle title={'CounterOne'} counterValue={counterOne} />
     <CounterButton title={'Increment CounterOne'} func={incementByOne} />
          <span>{isEven ? 'Even' : 'Odd'}</span>
     <CounterTitle title={'CounterFive'} counterValue={counterFive} />
     <CounterButton title={'Increment CounterFive'} func={incementByFive} />
    </div>
  );
}

export default App;
