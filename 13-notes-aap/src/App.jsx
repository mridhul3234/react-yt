import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, details })
    setTask(copyTask)

    setTitle('')
    setDetails('')

  }

  const deleteNote = (idx) => {
    const copyTask = [ ...task ]

    copyTask.splice(idx, 1)
    setTask(copyTask)
  }
  return (
    <div className='h-screen lg:flex bg-gray-900 text-white'>

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input type="text"
          placeholder='Enter Notes Heading
            ' className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />

        <textarea placeholder='Write Details'
          className='flex items-start flex-row px-5 w-full h-32 font-medium py-2 border-2 outline-none rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}></textarea>

        <button className='bg-white font-medium w-full outline-none text-black px-5 py-2 rounded '>Add Note</button>

      </form>

      <div className='lg:w1/2 lg:border-l-2 p-10'>

        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>

          {task.map(function (elem, idx) {

            return <div key={idx}>
              <div>
                <h3>{elem.title}</h3>
                <p>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='bg-red-600 absolute '>Delete
              </button>
            </div>
          })}

        </div>
      </div>

    </div>
  )
}

export default App
