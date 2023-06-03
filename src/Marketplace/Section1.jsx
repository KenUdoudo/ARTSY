import downArrow from './assets/Frame 5.png'
const Section1market = () => {
  return ( 
    <div className='flex flex-row justify-center items-center md:gap-x-10 lg:gap-x-20 lg:mx-10 mt-10 md:mx-20'>
      <input type="search" placeholder="Search" className="bg-gray-300 pl-5 w-1/5 rounded hidden md:block"/>
      <div className='md:w-4/5 lg:w-3/5 md:flex flex-row justify-between items-center border-0 shadow-2xl px-4 py-2 hidden'>
        <p className='font-bold'>See 1-6 of 16 results</p>
        <div className='flex flex-row items-center'>
          <p className='font-bold'>Sort By</p>
          <img src={ downArrow }/>
        </div>
      </div>

      <button className='relative md:hidden group'>
        <p>Filter</p>
        <div className='absolute hidden top-full min-full w-max bg-white shadow-md mt-1 rounded group-focus:block'>
          <ul className='text-left border rounded'>
            <li className='px-4 py-1 border-b'>Editorials</li>
            <li className='px-4 py-1 border-b'>Fashion</li>
            <li className='px-4 py-1 border-b'>Optics</li>
            <li className='px-4 py-1 border-b'>Art & Museum</li>
            <li className='px-4 py-1 border-b'>Nature</li>
          </ul>
        </div>
      </button>


    </div>
   );
}
 
export default Section1market;