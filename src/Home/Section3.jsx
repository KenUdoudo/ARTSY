import backdrop from "./assets/Rectangle 90web gradient.png"
import inside from './assets/Rectangle 91inside gradient.png'
const Section3home = () => {
  return (
    <div className="static mt-40">
      <div className="absolute mx-20 z-10">
        <h3 className="mt-6 text-2xl text-white">See Upcoming Auctions and Exibitions</h3>
        <hr className="my-4 mx-2" />
        <div>


          <div className="absolute z-20 text-white  bottom-10">
            <div className="flex flex-row mx-6 items-center">
              <h2 className="text-6xl">01</h2>
              <div className="flex flex-col gap-3">
                <h3>MONALISA REDEFINDED <br />IN STYLE.</h3>
                <p>STARTS ON 08:00 GTS. MONDAY</p>
                <p>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br />INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR <br />HIGHEST AND LOWEST BIDS. </p>
              </div>
              <div>
                <a href="#"><p>See More</p></a>
                <a href="#"><p>Set a Reminder</p></a>
              </div>
            </div>
          </div>


          <img src={ inside }/>
        </div>
      </div>
      <img src={ backdrop } className="w-full h-auto z-0"/>
      
    </div>
  );
}
 
export default Section3home;