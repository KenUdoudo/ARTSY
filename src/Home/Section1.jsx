import CarouselOne from './assets/Homepage carousel WEB.png'
import CarouselTwo from './assets/Homepage carousel WEB (1).png'
import CarouselThree from './assets/Homepage carousel WEB (2).png'
import CarouselFour from './assets/Homepage carousel WEB (3).png'
import mainPic from './assets/Component 13home 1st img.png'

const Section1home = () => {
  return (

    <div className="flex flex-col justify-center items-center gap-y-5 text-center mt-5 mx-20 md:mx-0">
      <h2 className='text-2xl lg:text-6xl md:text-4xl sm:text-3xl font-bold font-bruno'>Photography is poetry & <br/>beautiful untold stories</h2>

      <p className='text-sm md:text-lg md:px-20 sm:text-base font-rale'>Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access.</p>

      <div className='lg:flex flex-row justify-between gap-x-2 w-full overflow-hidden hidden'>
        <img src={ CarouselOne } className='w-4/5 lg:w-3/5'/>
        <img src={ CarouselTwo } className= 'w-4/5 lg:w-3/5 '/>
        <img src={ CarouselThree } className='w-4/5 lg:w-3/5 '/>
        <img src={ CarouselFour } className='w-4/5 lg:w-3/5'/>
      </div>
      <img src={ mainPic } className='lg:hidden'/>
    </div>

  );
}
 
export default Section1home;