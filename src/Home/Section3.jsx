import backdrop from "./assets/Rectangle 90web gradient.png"
import inside from './assets/Rectangle 91inside gradient.png'
import loaderOne from './assets/Loader.png'
import arrow from './assets/Arrow.png'
import blueArrow from './assets/arrow 1.png'
const Section3home = () => {
  return (
    <div className="static mt-40">
      <div className="absolute mx-20 z-10">
        <h3 className="mt-2 lg:mt-6 text-base sm:text-lg lg:text-xl text-white">See Upcoming Auctions and Exibitions</h3>
        <hr className="my-1 md:my-4 mx-2" />
        <div>


          <div className="absolute z-20 text-white  bottom-20 md:bottom-40">
            <div className="flex flex-row mx-2 md:mx-6 items-center">
              <h2 className="text-3xl lg:text-6xl md:text-5xl">01</h2>
              <div className="flex flex-col ml-4 gap-3">
                <h3 className="text-xl lg:text-3xl md:text-2xl font-stix">MONALISA REDEFINDED <br />IN STYLE.</h3>
                <p className="lg:text-sm md:text-xs">STARTS ON 08:00 GTS. MONDAY</p>
                <p className="text-sm lg:text-lg md:text-base font-rale">GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br />INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR <br />HIGHEST AND LOWEST BIDS. </p>
              </div>
              <div className="flex flex-row gap-4 ml-20 mt-40 lg:mt-20 items-center">
                <a href="#"><p className="underline whitespace-nowrap">See More</p></a>
                <a href="#"><p className="border px-3 py-2 rounded-md whitespace-nowrap text-sm">Set a Reminder</p></a>
              </div>
            </div> 
          </div>
          <img src={ inside }/>
        </div>
        <div className="flex flex-row justify-between items-center mt-1 lg:mt-2">
          <img src={ loaderOne } className="lg:w-auto h-2/4 w-1/4 sm:w-2/6"/>
          <img src={ arrow } className="md:w-1/5 w-1/6"/>
        </div>
      </div>
      <img src={ backdrop } className="w-full h-auto z-0"/>
      <hr className="mt-20 mx-20" />
      <div className="flex flex-row justify-between items-center  mt-8 mx-10 sm:mx-20">
        <h3 className=" text-2xl">Explore Marketplace.</h3>
        <img src={ blueArrow } className="w-10 h-10"/>
      </div>
      <hr className="mt-10 mx-20" />
      <div className="flex flex-row justify-between items-center  mt-8 mx-10 sm:mx-20">
        <h3 className=" text-2xl">See auctions.</h3>
        <img src={ blueArrow } className="w-10 h-10"/>
      </div>
    </div>
  );
}
 
export default Section3home;