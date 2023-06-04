import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Drops from './Drops'
import Home from './Home'
import Auction from './Auction'
import Marketplace from './Marketplace'
import Philomena from './Philomena'
function App() {
  
  return (
    
    <div className="App">
     
     
      <Routes>
      
      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/Marketplace" element={ <Marketplace /> }/>
      <Route exact path="/Auctions" element={ <Auction /> }/>
      <Route exact path="/Drops" element={ <Drops /> }/>
      <Route exact path="/Philomena" element={ <Philomena /> }/>
     </Routes>
    </div>
    
  )
}

export default App
