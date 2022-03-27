import React from 'react';
import './App.css';
import Laptop from './Laptop';
function App() {
  const state = {
    company: "Lenovo",
    processor: "i7",
    generation: "6th"
  }
  const state2 = {
    company: "Lenovo",
    processor: "i9",
    generation: "11th"
  }
  return (
     <>
           <Laptop detail={state}/>
           <Laptop detail={state2}/>
     </>
  );
}

export default App;