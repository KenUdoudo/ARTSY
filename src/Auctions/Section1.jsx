import one from './assets/Rectangle 247.png'
import two from './assets/Rectangle 246.png'
import three from './assets/Rectangle 245.png'
const Section1auction = () => {
  return (  
    <div className="mx-10 md:mx-20 font-rale">
      <p className="mt-20 md:mt-28 text-lg font-semibold">Here's an overview of products actively on auction, explore!</p>

      <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
        <a href="#">
        <div className='static flex hover:shadow-2xl w-full'>
        <p className='absolute z-10 border-0 rounded bg-slate-700 bg-opacity-25 text-white text-2xl mt-36 sm:mt-60 md:mt-28 ml-10 sm:ml-20 md:ml-5 px-4 py-1 md:text-lg'>6hrs: 40mins: 15s</p>
          <img src={ one }/>
        </div>
        </a>

        <a href="#">
        <div className='static hover:shadow-2xl'>
        <p className='absolute z-10 border-0 rounded bg-slate-700 bg-opacity-25 text-white text-2xl mt-36 sm:mt-60 md:mt-28 ml-10 sm:ml-20 md:ml-5 px-4 py-1 md:text-lg'>6hrs: 40mins: 15s</p>
          <img src={ three }/>
        </div>
        </a>

        <a href="#">
        <div className='static hover:shadow-2xl'>
        <p className='absolute z-10 border-0 rounded bg-slate-700 bg-opacity-25 text-white text-2xl mt-36 sm:mt-60 md:mt-28 ml-10 sm:ml-20 md:ml-5 px-4 py-1 md:text-lg'>6hrs: 40mins: 15s</p>
          <img src={ two }/>
        </div>
        </a>
      </div>
    </div>
  );
}
 
export default Section1auction;