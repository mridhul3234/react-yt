import React from 'react'

const App = () => {
  function InputChanging(val)
  {
    console.log(val)
  }
  return (
    <div>
      <input type="text" 
      onChange={function(elem){
        InputChanging(elem.target.value)
      }}placeholder='Enter Name'/>
    </div>
  )
}

export default App
