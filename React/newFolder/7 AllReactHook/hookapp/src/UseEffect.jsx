import React, { useEffect, useState } from 'react'

const UseEffect = () => {

 const [count, setCount] = useState(1);
 const [count2, setCount2] = useState(100);

//   useEffect(()=>{
//        console.log('call after components render');
//   })
  
  useEffect(()=>{
      //  console.log('call after render count2');
  },[count2])
  

  return (
    <div>
           <h4>First Counter: {count}</h4>
           <button onClick={()=> setCount(count+1)}>Increment</button>
           <h4>Second Counter: {count2}</h4>
           <button onClick={()=> setCount2(count2-1)}>Decrement</button>
    </div>
  )
}

export default UseEffect
