import NavBar from "./NavBar";
import Section1home from "./Home/Section1";
import Section2home from "./Home/Section2";

const Home = () => {
  return (
    <div className="Home">
      
      <NavBar/>
      
      <Section1home />

      <Section2home />
      
    </div>
  );
}
 
export default Home;