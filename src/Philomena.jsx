import NavBar from "./NavBar";
import first from './Marketplace/assets/Rectangle 251.png'

const Philomena = () => {
  return (
    <div>
      <NavBar />

      <div>
        <img src={ first }/>
        <div>
          <p>Philomena</p>
          <p>$3.90</p>
        </div>
      </div>
      
    </div>
  );
}
 
export default Philomena;