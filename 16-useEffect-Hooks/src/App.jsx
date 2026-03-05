import React, { useEffect, useState } from 'react'

const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging()    
  {
    console.log('A ki value chnage ho gyi ');
    
  }
  function bChanging()    
  {
    console.log('B ki value chnage ho gyi ');
    
  }

  useEffect(function(){
    aChanging()
    
  },[a,b]) 

    return (
    <div>
      <h2>A is {a}</h2>
      <h2>B is {b}</h2>
      <button onClick={()=>{
        setA(a+1)
      }}>Button</button>
      <button onClick={()=>{
        setB(b-1)
      }}>Button</button>
      
    </div>
  )
}

export default App

