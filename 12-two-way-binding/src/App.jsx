import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(e)

    setTitle('')
  }
  return (
    <div>
      <div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text"
         placeholder='type your name...'
         value = {title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }} />
         
        <button>Submit</button>
      </form>
        </div>
    </div>
  )
}

export default App
