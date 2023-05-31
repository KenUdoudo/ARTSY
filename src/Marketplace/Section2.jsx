import filter from './assets/Frame 34.png'
import down from './assets/Frame 6.png'
const Section2market = () => {
  return (  
    <div className='mx-10 mt-5'>
      <div className='flex flex-col w-1/6 '>
        <div className='flex flex-row border-black border-b-2 justify-start items-center'>
          <img src={ filter } className='w-10'/>
          <p className='font-bold'>Filter</p>
        </div>

        <div className='mt-5'>
          <div className='flex flex-row justify-between items-center'>
            <p className='font-bold'>By Category</p>
            <img src={ down } className='w-7'/>
          </div>
          <div className='flex flex-col mt-4'>
          <p><input type="checkbox" id='edit'/> Editorials</p>
          <p><input type="checkbox" id='fashion'/> Fashion</p>
          <p><input type="checkbox" id='optics'/> Optics</p>
          <p><input type="checkbox" id='art'/> Art & Museum</p>
          <p><input type="checkbox" id='nature'/> Nature</p>
          </div>
        </div>



      </div>








    </div>
  );
}
 
export default Section2market;