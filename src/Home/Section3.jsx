import backdrop from "./assets/Rectangle 90web gradient.png"
import inside from './assets/Rectangle 91inside gradient.png'
import loaderOne from './assets/Loader.png'
import arrow from './assets/Arrow.png'
import blueArrow from './assets/arrow 1.png'
const Section3home = () => {
  return (
    <div className="static mt-40">
      <div className="absolute mx-20 z-10">
        <h3 className="mt-6 text-2xl text-white">See Upcoming Auctions and Exibitions</h3>
        <hr className="my-4 mx-2" />
        <div>


          <div className="absolute z-20 text-white  bottom-40">
            <div className="flex flex-row mx-6 items-center">
              <h2 className="text-6xl">01</h2>
              <div className="flex flex-col ml-4 gap-3">
                <h3 className="text-3xl">MONALISA REDEFINDED <br />IN STYLE.</h3>
                <p>STARTS ON 08:00 GTS. MONDAY</p>
                <p className="text-lg">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br />INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR <br />HIGHEST AND LOWEST BIDS. </p>
              </div>
              <div className="flex flex-row gap-8 ml-20 mt-20 items-center">
                <a href="#"><p className="underline">See More</p></a>
                <a href="#"><p className="border px-3 py-2 rounded-md">Set a Reminder</p></a>
              </div>
            </div> 
          </div>
          <img src={ inside }/>
        </div>
        <div className="flex flex-row justify-between items-center mt-2">
          <img src={ loaderOne } className="w-auto h-2/4"/>
          <img src={ arrow }/>
        </div>
      </div>
      <img src={ backdrop } className="w-full h-auto z-0"/>
      <hr className="mt-20 mx-20" />
      <div>
        <h3 className="mx-20 mt-8 text-2xl">Explore Marketplace</h3>
      </div>
    </div>
  );
}
 
export default Section3home;