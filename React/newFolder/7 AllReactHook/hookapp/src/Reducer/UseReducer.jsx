import React, { useReducer} from 'react'
import reducer from './reducer';
const UseReducer = () => {
    let count = 0;
    const [value, dispatch] = useReducer(reducer, count);

  return (
    <div>
           <h4>First Counter: {value}</h4>
           <button onClick={()=> dispatch("increment")}>Increment</button>
           <button onClick={()=> dispatch("decrement")}>Decrement</button>
    </div>
  )
}

export default UseReducer
