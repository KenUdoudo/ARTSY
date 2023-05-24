import eyo from './assets/Rectangle 82.png'
import ginger from './assets/Rectangle 84.png'
import water from './assets/Rectangle 87.png'
import material from './assets/Rectangle 232.png'
const Section2drops = () => {
  return (
    <div className="mx-10 md:mx-20 flex flex-col justify-center items-center font-rale">
      <div className='flex md:flex-row flex-col justify-center items-center md:gap-x-12 gap-y-10 mt-10'>
        
          <img src={ eyo } className='md:w-3/6 w-5/6'/>
      
        <div className='flex flex-col md:gap-y-6 sm:gap-y-3 gap-y-1 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-blue-700 text-white text-sm'>UPCOMING</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Eyo : Eko For Show</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Aliya Minat</span></a></p>
          <a href="#" className='text-blue-600 underline text-sm'>Get notified</a>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-center items-center md:gap-x-12 gap-y-10 mt-10'>
        
          <img src={ ginger } className='md:w-3/6 w-5/6'/>
      
        <div className='flex flex-col gap-y-6 md:gap-y-3 sm:gap-y-1 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-green-700 text-white text-sm'>LIVE NOW</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Ginger Suburbs</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Tina Benson</span></a></p>
          <a href="#" className='text-blue-600 underline text-sm'>Join now</a>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-center items-center md:gap-x-12 gap-y-10 mt-10'>
        
          <img src={ water } className='md:w-3/6 w-5/6'/>
      
        <div className='flex flex-col gap-y-6 md:gap-y-3 sm:gap-y-1 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-gray-700 text-white text-sm'>ENDED</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Sink</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Aliya Minat</span></a></p>
          <a href="#" className='text-blue-600 underline text-sm'>View</a>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-center items-center md:gap-x-12 gap-y-10 mt-10'>
        
        <img src={ material } className='md:w-3/6 w-5/6'/>
    
      <div className='flex flex-col gap-y-6 md:gap-y-3 sm:gap-y-1 justify-center items-start'>
        <p className='border-0 rounded px-6 py-1 bg-gray-700 text-white text-sm'>ENDED</p>
        <p className='text-sm'>November 21 at 11 am WAT</p>
        <h3 className='text-lg font-semibold'>Warped 99</h3>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
        <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Aliya Minat</span></a></p>
        <a href="#" className='text-blue-600 underline text-sm'>View</a>
      </div>
      
    </div>
    <a href="#"><p className='flex text-center border border-gray-900 px-4 py-1 mt-10 rounded'>See More</p> </a>

      

    </div>
  );
}
 
export default Section2drops;