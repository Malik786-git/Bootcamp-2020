import { useReducer } from "react";
import reducer from "./reducer";

export default function Counter() {
    
   const initialState = {count: 0};
   const [state, dispatch] = useReducer(reducer, initialState);
 

    return (
        <>
             <h1>Count : {state.count}</h1>
             <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
              <br />
              <br />
             <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </>
    )
}

