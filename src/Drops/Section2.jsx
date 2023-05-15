import eyo from './assets/Rectangle 82.png'

const Section2drops = () => {
  return (
    <div className="mx-20">
      <div className='flex flex-row justify-center items-center gap-x-8 mt-10'>
        
          <img src={ eyo } className='w-3/6'/>
      
        <div className='flex flex-col gap-y-6 justify-center items-start'>
          <p className='border-0 rounded px-6 py-1 bg-blue-700 text-white text-sm'>UPCOMING</p>
          <p className='text-sm'>November 21 at 11 am WAT</p>
          <h3 className='text-lg font-semibold'>Eyo : Eko For Show</h3>
          <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Excepturi reiciendis, voluptatem dolore voluptate eum <br />  voluptatum possimus libero? </p>
          <p>Creator : <a href="#"><span>Aliya Minat</span></a></p>
          <a href="#">Get notified</a>
        </div>
      </div>






    </div>
  );
}
 
export default Section2drops;