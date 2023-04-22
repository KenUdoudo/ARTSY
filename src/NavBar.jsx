

const NavBar = () => {

  const homePage = () =>{
    Home.style.display = "block"
    market.style.display = "none"
  }
  const marketPage = () =>{
   Home.style.display = "none"
   market.style.display = "block"
  
  }


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
      </div>
      
    </div>
  );
}
 
export default NavBar;