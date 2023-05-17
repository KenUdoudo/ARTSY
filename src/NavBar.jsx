import Cart from "./assets/Home/Vectorcart.png"
import Bell from "./assets/Home/Notification iconbell.png"
import search from './assets/Home/Search icon.png'

const NavBar = () => {


  return (
    
    <div className="NavBar">
      
      <div className="flex flex-row justify-between px-20 mt-5 items-center">
        <h3 className="text-2xl font-bold font-stix">ARTSY.</h3>

        <ul className="flex flex-row gap-x-5 font-rale">
          <li><a href="/">Home</a></li>
          <li><a href="/Marketplace">Marketplace</a></li>
          <li><a href="/Auction">Auctions</a></li>
          <li><a href='/Drops'>Drop</a></li>
        </ul>
       <div className="flex flex-row gap-x-5 items-center">
        <img src={ search } className="w-10 h-10"/>
        <a href="#"><img src={ Cart } className="w-6 h-6"/></a>
        <a href="#"><img src= { Bell } className="w-9 h-10"/></a>
        </div>
      </div>
      
    </div>
  );
}
 
export default NavBar;