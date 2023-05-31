import filter from './assets/Frame 34.png'
import down from './assets/Frame 6.png'
const Section2market = () => {
  return (  
    <div className='mx-10 mt-5'>
      <div className='flex flex-col w-1/6 '>
        <div className='flex flex-row border-black border-b-2 justify-start items-center'>
          <img src={ filter } className='w-10'/>
          <p>Filter</p>
        </div>

        <div>
          <div className='flex flex-row justify-between items-center'>
            <p>By Category</p>
            <img src={ down } className='w-7'/>
          </div>
          <div>
          <input type="checkbox" id='edit'/> Editorials
          <input type="checkbox" id='fashion'/> Fashion
          <input type="checkbox" id='optics'/> Optics
          <input type="checkbox" id='art'/> Art & Museum
          <input type="checkbox" id='nature'/> Nature
          </div>
        </div>



      </div>








    </div>
  );
}
 
export default Section2market;