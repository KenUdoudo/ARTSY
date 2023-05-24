import mail from './assets/Home/Framemail.png'
import location from './assets/Home/Framelocation.png'
const Footer = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col md:justify-center justify-start md:items-center items-start gap-y-4 md:border-2 border-0 mx-10 py-10">
        <h3 className="text-2xl font-stix sm:text-xl md:text-lg">NEWSLETTER</h3>
        <p className="text-lg font-rale sm:text-xl">Subscribe to get daily updates on news drops & exciting deals</p>
        <div>
          <form className="flex md:flex-row flex-col md:gap-x-4 gap-y-4 justify-start md:justify-center items-start md:items-center font-rale">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="border-2 border-gray-500 md:pl-5 pl-8 pr-16 md:py-1 py-2 md:text-sm text-lg"/>
            <button type="submit" className="text-sm text-white bg-black px-2 py-1 border-2 border-black">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-around items-start md:items-center mx-10 md:mx-20 mt-8 gap-y-4'>
        <h2 className="text-2xl font-bold font-bruno">ARTSY.</h2>
        <div className='hidden md:flex flex-col gap-y-4 text-gray-700 font-rale'>
          <a href="#"><p>Home</p></a>
          <a href="#"><p>Marketplace</p></a>
          <a href="#"><p>Auctions</p></a>
          <a href="#"><p>Drops</p></a>
        </div>
        <div className='hidden md:flex flex-col gap-y-4 text-gray-700 font-rale'>
          <a href="#"><p>Blog</p></a>
          <a href="#"><p>Wallets</p></a>
          <a href="#"><p>Rates</p></a>
          <a href="#"><p>High bids</p></a>
        </div>
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-row gap-x-2 font-rale'>
            <img src={ mail }/>
            <p>artsystudios@gmail.com</p>
          </div>
          <div className='flex flex-row gap-x-2 font-rale'>
            <img src={ location }/>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <p className='text-center text-sm font-rale text-gray-700 mt-4'>Artsystudios @ 2022. All Rights Reserved.</p>

    </div>
  );
}
 
export default Footer;