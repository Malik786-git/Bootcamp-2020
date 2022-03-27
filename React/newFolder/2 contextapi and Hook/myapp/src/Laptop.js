import React from 'react';
import './App.css';
import Model from './Model';

export const laptopDetail = React.createContext();
function Laptop(props) {

  return (
     <>
     <laptopDetail.Provider value={props.detail}>

     <div className="container">
         <h1>Laptops</h1>
         <Model/>
     </div>
     </laptopDetail.Provider>
     </>
  );
}

export default Laptop;
