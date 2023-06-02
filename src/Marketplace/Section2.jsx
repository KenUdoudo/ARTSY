import filter from './assets/Frame 34.png'
import down from './assets/Frame 6.png'
import first from './assets/Rectangle 251.png'
import second from './assets/Rectangle 299.png'
import third from './assets/Rectangle 49.png'
import fourth from './assets/Rectangle 53.png'
import fifth from './assets/Rectangle 54 (1).png'
import sixth from './assets/Rectangle 50.png'
import seventh from './assets/Rectangle 48.png'
import eight from './assets/Rectangle 52.png'
import ninth from './assets/Rectangle 55 (1).png'



const Section2market = () => {
  return (  
    <div className='mx-10 mt-5 flex flex-row gap-x-6'>
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
      <div className='grid grid-cols-3 mt-7 md:mx-20 mx-40 gap-14 justify-center items-center'>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ first } className='w-40'/>
          <p className='text-sm mt-2'>PHILOMENA '22</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ second } className='w-40'/>
          <p className='text-sm mt-2'>BOOLEAN EGYPTIAN</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ third } className='w-40'/>
          <p className='text-sm mt-2'>BLANC</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ fourth } className='w-40'/>
          <p className='text-sm mt-2'>ELLIPSIA</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ fifth } className='w-40'/>
          <p className='text-sm mt-2'>THE LAWMAKERS</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ sixth } className='w-40'/>
          <p className='text-sm mt-2'>VEIL</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ seventh } className='w-40'/>
          <p className='text-sm mt-2'>ALTERNATING</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ eight } className='w-40'/>
          <p className='text-sm mt-2'>ROSEMARY '22</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
        <div className='rounded border-0 shadow-2xl px-2 py-1'>
          <img src={ ninth } className='w-40'/>
          <p className='text-sm mt-2'>BEVERLY</p>
          <h3 className='text-lg font-bold mt-5'>$3.90</h3>
        </div>
      </div>







    </div>
  );
}
 
export default Section2market;