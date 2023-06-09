import NavBar from "./NavBar";
import first from './Marketplace/assets/Rectangle 251.png'
import downArrow from './Marketplace/assets/Frame 5.png'
const Philomena = () => {
  return (
    <div>
      <NavBar />

      <div className="flex flex-col justify-center items-start mt-20 border border-black mx-20 px-10 py-10 gap-y-4">
        <div className="flex flex-col justify-center items-center">
          <img src={ first }/>
          <div className="flex flex-row justify-center items-center gap-x-10 mt-5">
            <p className="text-2xl font-bold">Philomena</p>
            <p className="text-2xl">$3.90</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-y-3 text-xl">
          <p className="items-start">Creator</p>
          <p>Made in italy</p>
          <p>Total views: 1.7k views</p>
          <div className="flex flex-row gap-x-4 text-2xl">
           <button>-</button>
           <p>0</p>
           <button>+</button>
          </div>
          <button className="bg-blue-900 text-white text-lg px-4 py-2">Add to Cart</button>
        </div>
        <div>
          <p>Description</p>
          <img src={ downArrow }/>
        </div>
      </div>
      
    </div>
  );
}
 
export default Philomena;