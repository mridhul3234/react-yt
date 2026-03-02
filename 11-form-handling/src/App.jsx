import React from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form submitted")
  }
  return (
    <div>
      <div>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='type your name...' />
        <button>Submit</button>
      </form>
        </div>
    </div>
  )
}

export default App
