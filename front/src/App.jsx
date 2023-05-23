import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AddValue from './components/AddValue'
import Details from './pages/Details'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<AddValue/>}></Route>
      <Route path='/:id' element={<Details/>}></Route>
    </Routes>
    </>
  )
}

export default App
