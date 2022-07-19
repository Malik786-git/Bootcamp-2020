import React, { useState } from 'react'

const UseState = () => {

  const [count, setCount] = useState(0);
  const update = ()=> {
    setCount((count)=> {
      console.log(count); //return prevalue of count
      return count + 1
    })
  }

  return (
    <div>
           <h4>Count: {count}</h4>
           <button onClick={update}>Increment</button>
    </div>
  )

}

export default UseState;
     