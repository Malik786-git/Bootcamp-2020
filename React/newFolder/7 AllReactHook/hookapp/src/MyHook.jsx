import { useState } from 'react'

export const useMyHook = (defaultValue) => {

   const [count, setCount] = useState(defaultValue);


  return (
    [count, setCount]
  )
}


