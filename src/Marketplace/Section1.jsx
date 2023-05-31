import downArrow from './assets/Frame 5.png'
const Section1market = () => {
  return ( 
    <div className='flex flex-row justify-center items-center gap-x-20 mx-10 mt-10 md:mx-20'>
      <input type="search" placeholder="Search" className="bg-gray-300 pl-5 w-1/5 rounded"/>
      <div className='w-3/5 flex flex-row justify-between items-center border-0 shadow-2xl px-4 py-2'>
        <p className='font-bold'>See 1-6 of 16 results</p>
        <div className='flex flex-row items-center'>
          <p className='font-bold'>Sort By</p>
          <img src={ downArrow }/>
        </div>
      </div>
    </div>
   );
}
 
export default Section1market;