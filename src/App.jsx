import { useState } from 'react'
import { Homepage } from './Pages/Homepage';
import { Routes, Route } from 'react-router'  
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="checkout" element={<h1>Checkout Page</h1>} />
    </Routes>
  )
}

export default App
