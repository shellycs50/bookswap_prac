import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import ClaimedBooks from './components/ClaimedBooks/ClaimedBooks'

function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/claimedbooks' element={<ClaimedBooks />} />

    </Routes>
    
    
    
    
    
    </BrowserRouter>

      
  )
}

export default App
