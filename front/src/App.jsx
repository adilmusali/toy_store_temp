import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AddValue from './components/AddValue'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<AddValue/>}></Route>
    </Routes>
    </>
  )
}

export default App
