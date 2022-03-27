import React, { useState } from "react";
import Parent from "./Parent";
import counterContext from "./CounterContext";
import "./App.css";

function App() 
{
  let countState = useState(1);
  return (
    <>
    <counterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </counterContext.Provider>
    </>
  );
}


export default App;