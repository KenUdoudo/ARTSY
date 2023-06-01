import filter from './assets/Frame 34.png'
import down from './assets/Frame 6.png'
import first from './assets/Rectangle 251.png'



const Section2market = () => {
  return (  
    <div className='mx-10 mt-5 flex flex-row'>
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

        <div className='mt-5'>
          <div className='flex flex-row justify-between items-center'>
            <p className='font-bold'>By price</p>
            <img src={ down } className='w-7'/>
          </div>
          <div className='flex flex-col mt-4 gap-y-6'>
            <p>$100.00 - $150.00</p>
            <input type="range"/>
          </div>
        </div>

        <div className='mt-5'>
          <div className='flex flex-row justify-between items-center'>
            <p className='font-bold'>By artist</p>
            <img src={ down } className='w-7'/>
          </div>
          <div className='flex flex-col mt-4 gap-y-2'>
           <p>All</p>
           <p>Below $100.00</p>
           <p>$100.00 - $149.00</p>
           <p>$150.00 - $200.00</p>
           <p>Above $200.00</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row'>
        <div>
          <img src={ first }/>
          <p>PHILOMENA '22</p>
          <h3>$3.90</h3>
        </div>



      </div>







    </div>
  );
}
 
export default Section2market;