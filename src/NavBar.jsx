import { useState } from "react"
import Cart from "./assets/Home/Vectorcart.png"
import Bell from "./assets/Home/Notification iconbell.png"
import search from './assets/Home/Search icon.png'
import hamburger from './assets/Home/Frame 38hamburger.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  let [open,setOpen]=useState(false);

  return (
    
    <div>
      
      <div className="static first:flex flex-row justify-between px-10 sm:px-20 mt-5 items-center overflow-hidden ">
        <h3 className="text-2xl font-bold font-stix">ARTSY.</h3>

        <ul className="md:flex flex-row gap-x-5 font-rale hidden ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Marketplace">Marketplace</Link></li>
          <li><Link to="/Auctions">Auctions</Link></li>
          <li><Link to='/Drops'>Drop</Link></li>
        </ul>
        <ul className={`flex flex-col text-xl sm:text-2xl bg-white w-full pl-10 py-6 gap-y-5 font-rale md:hidden absolute z-10 duration-75  ${open ? 'top-20':'-top-full' }`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Marketplace">Marketplace</Link></li>
          <li><Link to="/Auctions">Auctions</Link></li>
          <li><Link to='/Drops'>Drop</Link></li>
        </ul>
       <div className="md:flex flex-row gap-x-5 items-center hidden">
        <img src={ search } className="w-10 h-10"/>
        <a href="#"><img src={ Cart } className="w-6 h-6"/></a>
        <a href="#"><img src= { Bell } className="w-9 h-10"/></a>
        </div>
        <div onClick={()=>setOpen(!open)} className="md:hidden" >
        <img src={ hamburger } />
        </div>
      </div>
      
    </div>
  );
}
 
export default NavBar;