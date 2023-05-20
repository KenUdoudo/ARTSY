import CarouselOne from './assets/Homepage carousel WEB.png'
import CarouselTwo from './assets/Homepage carousel WEB (1).png'
import CarouselThree from './assets/Homepage carousel WEB (2).png'
import CarouselFour from './assets/Homepage carousel WEB (3).png'
import mainPic from './assets/Component 13home 1st img.png'

const Section1home = () => {
  return (

    <div className="flex flex-col justify-center items-center gap-y-5 text-center mt-5 sm:mx-20">
      <h2 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold font-bruno'>Photography is poetry & <br/>beautiful untold stories</h2>

      <p className='text-lg md:text-base sm:text-sm font-rale'>Flip through more than 10,000 vintage shots, old photographs, historic <br />images and captures seamlessly in one place. Register to get top access.</p>

      <div className='flex flex-row justify-between gap-x-2 w-full overflow-hidden sm:hidden'>
        <img src={ CarouselOne } className='w-4/5 lg:w-3/5'/>
        <img src={ CarouselTwo } className= 'w-4/5 lg:w-3/5 '/>
        <img src={ CarouselThree } className='w-4/5 lg:w-3/5 '/>
        <img src={ CarouselFour } className='w-4/5 lg:w-3/5'/>
      </div>
      <img src={ mainPic }/>
    </div>

  );
}
 
export default Section1home;