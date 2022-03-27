import React, { useContext } from 'react'
import counterContext from './CounterContext';


function Child() {

let counterValue = useContext(counterContext);
// console.log(counterValue);  //here no need to use counterContext.Consumer

  return (
    <>
       <h1>This is child</h1>
       <h3>Counter Value = {counterValue[0]}</h3>
       <button onClick={()=> counterValue[1](++counterValue[0]) }>Increament</button>
    </>
  );
}

export default Child; 