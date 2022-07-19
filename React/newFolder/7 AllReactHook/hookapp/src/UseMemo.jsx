import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(100);
    
    function multiplyCouter() 
    {
        return count*3;
    } 
    const memoMultiplyer = useMemo(multiplyCouter, [count])

  return (
    <div>
      <h4>First Counter: {count}</h4>
           <button onClick={()=> setCount(count+1)}>Increment</button>
           <h4>Second Counter: {count2}</h4>
           <button onClick={()=> setCount2(count2-1)}>Decrement</button>

           <h4>First Counter Value * 3 = {memoMultiplyer}</h4>
    </div>
  )
}



export default UseMemo;
