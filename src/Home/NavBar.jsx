import Hamburger from './src/assets/home assets/Frame 38hamburger.png'
const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div>
      <img src={ Hamburger } onClick={()=>{setOpen(!open)}} id='ham'/>

      <div className={`navlinks ${open? 'active' : 'inactive'}`}>
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Auctions</a></li>
          <li><a href="#">Marketplace</a></li>
          
        </ul>
      </div>
      
    </div>
      
    </div>
  );
}
 
export default NavBar;