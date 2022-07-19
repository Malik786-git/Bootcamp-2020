import React, { createContext } from 'react'
import ChildContext from './ChildContext'

export const myContext = createContext({});
const UseContext = () => {
  

  const data = {
    userName: 'Jaffery Coder',
    email: 'jafferycoder@gmail.com'
  }

  
return (
    <div>
        <myContext.Provider value={data} >
               <ChildContext/>         
        </myContext.Provider>
    </div>
  )
}

export default UseContext
