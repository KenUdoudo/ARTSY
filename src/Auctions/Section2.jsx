import out from './assets/Group 527.png'
import fall from './assets/Group 528 (1).png'
const Section2auction = () => {
  return (
    <div className="mx-10 md:mx-20 font-rale">
      <p className="mt-10 md:mt-20 font-semibold">Top bids from popular creators</p>

      <div className='flex flex-col md:flex-row md:gap-x-10 gap-y-10 mt-10'>
        <div className='flex flex-col gap-y-4'>
          <img src={ out } />
          <p className='text-gray-600 font-semibold text-lg'>Creator: <span className='text-black'>Dan Murray</span></p>
          <p className='text-gray-600 font-semibold text-lg'>Date: <span className='text-black'>12/08/22</span></p>
          <p className='text-gray-600 font-semibold text-lg'>Highest bid: <span className='text-black'>0.57 ETH</span></p>


          <div className='flex flex-row gap-x-6 ml-10 items-center'>
            <div>
              <p className='text-gray-600 font-semibold text-lg'>Current bid</p>
              <p className='font-semibold text-lg'>0.987 ETH</p>
            </div>
            <button className='border-0 bg-blue-700 text-white
             text-sm px-6 py-1 '>Place bid</button>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <img src={ fall } />
          <p className='text-gray-600 font-semibold text-lg'>Creator: <span className='text-black'>Jacob Banks</span></p>
          <p className='text-gray-600 font-semibold text-lg'>Date: <span className='text-black'>12/08/22</span></p>
          <p className='text-gray-600 font-semibold text-lg'>Highest bid: <span className='text-black'>0.34 ETH</span></p>


          <div className='flex flex-row gap-x-6 ml-10 items-center'>
            <div>
              <p className='text-gray-600 font-semibold text-lg'>Current bid</p>
              <p className='font-semibold text-lg'>0.99 ETH</p>
            </div>
            <button className='border-0 bg-blue-700 text-white
             text-sm px-6 py-1 '>Place bid</button>
          </div>
        </div>




      </div>
    </div>
  );
}
 
export default Section2auction;