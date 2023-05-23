import { useState } from 'react'
import './App.css'
import { Router, Route, Routes } from 'react-router-dom'
import Drops from './Drops'
import Home from './Home'
import Auction from './Auction'
import Marketplace from './Marketplace'

function App() {
  
  return (
    
    <div className="App">
     
     <Router>
      <Routes>
      
      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/Marketplace" element={ <Marketplace /> }/>
      <Route exact path="/Auction" element={ <Auction /> }/>
      <Route exact path="/Drops" element={ <Drops /> }/>

     </Routes>
    </Router>
    </div>
    
  )
}

export default App
