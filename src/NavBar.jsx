import Cart from "./assets/Home/Vectorcart.png"

const NavBar = () => {



  return (
    <div className="NavBar">
      <div>
        <h3>ARTSY</h3>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Auctions</a></li>
          <li><a href="#">Drop</a></li>
        </ul>

        <img src={ Cart }/>
      </div>
      
    </div>
  );
}
 
export default NavBar;