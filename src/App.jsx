import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Drops from './Drops'
import Home from './Home'
import Auction from './Auction'

function App() {
  
  return (
    
    <div className="App">
     
     <Router>
      <Routes>
      
      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/Auction" element={ <Auction /> }/>
      <Route exact path="/Drops" element={ <Drops /> }/>

     </Routes>
    </Router>
    </div>
    
  )
}

export default App
