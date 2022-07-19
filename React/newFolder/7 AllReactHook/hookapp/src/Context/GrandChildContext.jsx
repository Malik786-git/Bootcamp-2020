import React, { useContext } from 'react'
import { myContext } from './UseContext';

const GrandChildContext = () => {

  const data = useContext(myContext);
  console.log(data);

  return (
    <div>
      GrandChild Receive Direct from UseContext.jsx
      <h6>Data</h6>
        <ul>
            <li>UserName: {data.userName}</li>
            <li>UserEmail:{data.email} </li>
        </ul>
    </div>
  )
}

export default GrandChildContext;
