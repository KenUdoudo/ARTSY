import sec2img1 from './assets/Featured product.png'
import sec2img2 from './assets/Featured product 2.png'
import sec2img3 from './assets/Featured product (1).png'
import groupProfile from './assets/Group 526people.png'
import arrow from './assets/Group 503.png'
const Section2home = () => {
  return (
    <div className="mx-10 md:mx-20">
      <h3 className="mt-14 text-2xl text-gray-700">Featured products</h3>

      <div>
        <hr className="my-6"/>
        <div className='flex flex-col lg:flex-row gap-y-4 md:gap-y-4 gap-x-8 items-center'>
          <img src={ sec2img1 } className='lg:w-3/5 lg:h-3/5'/>
          <div className='flex flex-col gap-y-6'>
            <h3 className='text-xl font-bold font-stix'>The Boolean Egyptian</h3>
            <p className='text-sm sm:text-base md:text-lg font-rale'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad deleniti delectus cum at harum ipsum fugiat laboriosam culpa vitae, sed cumque iure corrupti exercitationem enim odit. Explicabo, voluptates praesentium!</p>
            <div className='flex flex-row justify-between items-center'>
              <img src={ groupProfile } className='w-auto h-2/4'/>
              <img src={ arrow } className='w-10 h-10'/>
            </div>
          </div>
        </div>


        <hr className="my-6"/>
        <div className='flex flex-col-reverse lg:flex-row gap-y-4 md:gap-y-4 gap-x-8 items-center'>
          <div className='flex flex-col gap-y-6'>
            <h3 className='text-xl font-bold font-stix'>The Boolean Egyptian</h3>
            <p className='text-sm sm:text-base md:text-lg font-rale'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad deleniti delectus cum at harum ipsum fugiat laboriosam culpa vitae, sed cumque iure corrupti exercitationem enim odit. Explicabo, voluptates praesentium!</p>
            <div className='flex flex-row justify-between items-center'>
              <img src={ groupProfile } className='w-auto h-2/4'/>
              <img src={ arrow } className='w-10 h-10'/>
            </div>
          </div>
          <img src={ sec2img2 } className='lg:w-3/5 lg:h-3/5'/>
          
        </div>


        <hr className="my-6"/>
        <div className='flex flex-col lg:flex-row gap-y-4 md:gap-y-4 gap-x-8 items-center'>
          <img src={ sec2img3 } className='lg:w-3/5 lg:h-3/5'/>
          <div className='flex flex-col gap-y-6'>
            <h3 className='text-xl font-bold font-stix'>The Boolean Egyptian</h3>
            <p className='text-sm sm:text-base md:text-lg font-rale'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad deleniti delectus cum at harum ipsum fugiat laboriosam culpa vitae, sed cumque iure corrupti exercitationem enim odit. Explicabo, voluptates praesentium!</p>
            <div className='flex flex-row justify-between items-center'>
              <img src={ groupProfile } className='w-auto h-2/4'/>
              <img src={ arrow } className='w-10 h-10'/>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
 
export default Section2home;
