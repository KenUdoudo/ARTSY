import NavBar from "./NavBar";
import first from './Marketplace/assets/Rectangle 251.png'

const Philomena = () => {
  return (
    <div>
      <NavBar />

      <div className="flex flex-col justify-center items-center mt-20 border border-black mx-20 py-10">
        <img src={ first }/>
        <div className="flex flex-row justify-center items-center gap-x-10 mt-5">
          <p className="text-2xl font-bold">Philomena</p>
          <p className="text-2xl">$3.90</p>
        </div>
        <hr />
        <p className="items-start">Creator</p>
        <p>Made in italy</p>
        <p>Total views: 1.7k views</p>
        <div className="flex flex-row gap-x-4">
          <button>-</button>
          <p>0</p>
          <button>+</button>
        </div>
      </div>
      
    </div>
  );
}
 
export default Philomena;