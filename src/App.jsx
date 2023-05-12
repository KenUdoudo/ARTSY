import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Drops from './Drops'
import Home from './Home'

function App() {
  
  return (
    
    <div className="App">
     
     
      <Routes>
      
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/Drops" element={ <Drops /> }></Route>


    


     </Routes>
  
    </div>
    
  )
}

export default App
