import eyo from './assets/Rectangle 82.png'
import ginger from './assets/Rectangle 84.png'
import water from './assets/Rectangle 87.png'
import material from './assets/Rectangle 232.png'
const Section2drops = () => {
  return (
    <div className="mx-20 flex flex-col justify-center items-center font-rale">
      <div className='flex flex-row justify-center items-center gap-x-12 mt-10'>
        
          <img src={ eyo } className='w-3/6'/>
      
        <div className='flex flex-col gap-y-6 md:gap-y-3 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-blue-700 text-white text-sm'>UPCOMING</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Eyo : Eko For Show</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Aliya Minat</span></a></p>
          <a href="#" className='text-blue-600 underline text-sm'>Get notified</a>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-x-12 mt-16'>
        
          <img src={ ginger } className='w-3/6'/>
      
        <div className='flex flex-col gap-y-6 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-green-700 text-white text-sm'>LIVE NOW</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Ginger Suburbs</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Tina Benson</span></a></p>
          <a href="#" className='text-blue-600 underline text-sm'>Join now</a>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-x-12 mt-16'>
        
          <img src={ water } className='w-3/6'/>
      
        <div className='flex flex-col gap-y-6 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-gray-700 text-white text-sm'>ENDED</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Sink</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p className='font-semibold'>Creator : <a href="#"><span className='text-blue-600'>Aliya Minat</span></a></p>
          <a href="#" className='text-blue-600 underline text-sm'>View</a>
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-x-12 mt-16'>
        
        <img src={ material } className='w-3/6'/>
    
      <div className='flex flex-col gap-y-6 justify-center items-start'>
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