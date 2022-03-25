import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, countUpdate] = useState(0);
  const [dark, changeThem] = useState(false);
  return (
    <>
    <div className={`container ${dark? 'dark' : ''}`}>
             <div className="them">
                 <h3>{dark? "Dark Theme" :"Light Theme"} </h3>
                 <button onClick={()=> changeThem(!dark)}>change them</button>
                 <br />
                 <br />
                 <br />
             </div>
             <div className="counter">
                 <h1>Counter: {count}</h1>
                 <button onClick={()=> countUpdate(count+1)}>increament count</button>
             </div>
    </div>
    </>
  );
}

export default App;

