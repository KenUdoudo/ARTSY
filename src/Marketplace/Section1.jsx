import downArrow from './assets/Frame 5.png'
const Section1market = () => {
  return ( 
    <div>
      <input type="search" placeholder="Search" className="bg-gray-300 pl-5"/>
      <div>
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