import { useReducer } from "react";
import reducer from "./reducer";


const Counter = ()=> {
 

   const initialValue = {count: 0};
   const [state, dispatch] = useReducer(reducer, initialValue); 

   return (
       <>
          <h1>Counter : {state.count}</h1>

          <button 
             onClick={()=> dispatch({type:'increment'})}
             >Increment</button>
    
          <button
             onClick={()=> dispatch({type:'decrement'})}
          >Decrement</button>
       </>
   );


}

export default Counter;

