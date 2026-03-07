import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Courses from './pages/Courses'
import Kids from './pages/'

const App = () => {
  
  return (
    <div>
      <Navbar/> 
      <Navbar2/>
      <Routes>
        <Route    path='/' element= {<Home/>} />
        <Route    path='/about' element= {<About/>} />
        <Route    path='/courses' element= {<Courses/>} />

        <Route path='/product ' element={<Product/>}>
          <Route path='men' element={<Product />}/>
          <Route path='women' element={<Women />}/>
          <Route path='kids' element={<Kids />}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
