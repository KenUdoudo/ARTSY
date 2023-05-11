import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './Home'
function App() {
  
  return (
    <Router>
      <Routes>
    <div className="App">
      


    <Home />

    </div>
    </Routes>
    </Router>
  )
}

export default App
