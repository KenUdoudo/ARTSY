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
     
     
      <Routes>
      
      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/Marketplace" element={ <Marketplace /> }/>
      <Route exact path="/Auctions" element={ <Auction /> }/>
      <Route exact path="/Drops" element={ <Drops /> }/>

     </Routes>
    </div>
    
  )
}

export default App
