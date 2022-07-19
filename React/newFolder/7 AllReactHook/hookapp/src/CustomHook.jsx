import React from 'react'
import { useMyHook } from './MyHook';

const CustomHook = () => {
    const [number, setNumber] = useMyHook(10);
  return (
    <div>
      <h3> {number} </h3>
      <button onClick={()=> setNumber(number+1)}>update Number</button>
    </div>
  )
}

export default CustomHook;
