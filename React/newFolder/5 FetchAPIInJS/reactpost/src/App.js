import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
   
  const [data, setData] = useState([{}]);

  useEffect(()=>{
    
    // 'https://api.github.com.users/muhammadmohsin/repos'
      //  fetch('http://jsonplaceholder.typicode.com/posts/1')
      //  .then( res => res.json())
      //  .then( json => {
      //    console.log(json);
      //    setData(json);
      //  });

    async function getApi(){

      const response = await fetch('https://api.github.com/users/malik786-git/repos')
      const data = await response.json()
      console.log(data); 
      setData(data);
    }

    getApi();

    
  }, [])

  return (
    <div className="App">
      <h1>My All Git Repos</h1>
      <ol>

        {data.map((dataObj, index)=>{
         return (<li key={index}>{dataObj.name}</li>)
        })}

      </ol>
    </div>
  );
}



export default App;