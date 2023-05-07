import NavBar from "./NavBar";
import Section1home from "./Home/Section1";
import Section2home from "./Home/Section2";
import Section3home from "./Home/Section3";
import Section4home from "./Home/Section4";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="Home">
      
      <NavBar/>
      
      <Section1home />

      <Section2home />

      <Section3home />

      <Section4home />

      <Footer />
      
    </div>
  );
}
 
export default Home;