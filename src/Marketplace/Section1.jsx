import downArrow from './assets/Frame 5.png'
const Section1market = () => {
  return ( 
    <div className='flex flex-row justify-center items-center'>
      <input type="search" placeholder="Search" className="bg-gray-300 pl-5 w-1/5"/>
      <div className='w-3/5'>
        <p>See 1-6 of 16 results</p>
        <div>
          <p>Sort By</p>
          <img src={ downArrow }/>
        </div>
      </div>
    </div>
   );
}
 
export default Section1market;