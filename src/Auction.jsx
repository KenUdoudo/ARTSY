import Section1auction from "./Auctions/Section1";
import Section2auction from "./Auctions/Section2";
import NavBar from "./NavBar";

const Auction = () => {
  return (
    <div>

    <NavBar />

    <Section1auction />

    <Section2auction />
    </div>
  );
}
 
export default Auction;