import mail from './assets/Home/Framemail.png'
import location from './assets/Home/Framelocation.png'
const Footer = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col justify-center items-center gap-y-4 border-2 mx-10 py-10">
        <h3 className="text-lg font-stix">NEWSLETTER</h3>
        <p className="text-lg">Subscribe to get daily updates on news drops & exciting deals</p>
        <div>
          <form className="flex flex-row gap-x-4  ">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="border-2 border-gray-500 pl-5 pr-16 py-1 text-sm"/>
            <button type="submit" className="text-sm text-white bg-black px-2 py-1 border-2 border-black">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className='flex flex-row justify-around items-center mx-20 mt-8'>
        <h2 className="text-2xl font-bold">ARTSY.</h2>
        <div className='flex flex-col gap-y-4 text-gray-700'>
          <a href="#"><p>Home</p></a>
          <a href="#"><p>Marketplace</p></a>
          <a href="#"><p>Auctions</p></a>
          <a href="#"><p>Drops</p></a>
        </div>
        <div className='flex flex-col gap-y-4 text-gray-700'>
          <a href="#"><p>Blog</p></a>
          <a href="#"><p>Wallets</p></a>
          <a href="#"><p>Rates</p></a>
          <a href="#"><p>High bids</p></a>
        </div>
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-row gap-x-2'>
            <img src={ mail }/>
            <p>artsystudios@gmail.com</p>
          </div>
          <div className='flex flex-row gap-x-2'>
            <img src={ location }/>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <p className='text-center text-sm  text-gray-700 mt-4'>Artsystudios @ 2022. All Rights Reserved.</p>

    </div>
  );
}
 
export default Footer;