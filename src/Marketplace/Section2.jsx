import filter from './assets/Frame 34.png'
import down from './assets/Frame 6.png'
const Section2market = () => {
  return (  
    <div className='mx-10 mt-5'>
      <div className='flex flex-col'>
        <div className='flex flex-row border-black border-b-2 w-1/6 justify-start items-center'>
          <img src={ filter } className='w-10'/>
          <p>Filter</p>
        </div>

        <div>
          <div>
            <p>By Category</p>
            <img src={ down }/>
          </div>
        </div>



      </div>








    </div>
  );
}
 
export default Section2market;