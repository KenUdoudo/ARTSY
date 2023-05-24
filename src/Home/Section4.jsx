import loader2 from './assets/Loader (1).png'
import girl from './assets/Top Creators Animationgirl.png'
const Section4home = () => {
  return (
    <div className="static bg-gray-200 mt-20 ">
      <div  className='flex flex-row absolute z-10 gap-x-2 mt-60 right-2'>
        <img src={ girl }/>
        <div className='hidden md:flex flex-col items-start'>
          <h1 className='font-bold text-4xl font-bruno'>CIRCA</h1>
          <h1 className='font-bold text-8xl line-through font-bruno'>1985</h1>
        </div>
      </div>

      <div className='flex flex-row justify-between mx-10 md:mx-20 pt-10 z-0'>
        <h2 className='font-bold text-lg sm:text-xl md:text-3xl font-bruno'>TOP CREATORS OF <br />THE WEEK</h2>
        <div className='flex flex-row gap-x-3'>
          <img src={ loader2 } className='w-auto h-3/6'/>
          <div>
            <ul className='flex flex-col gap-3 text-sm sm:text-base md:text-lg font-rale'>
              <a href="#"><li>Editorials</li></a>
              <a href="#"><li>Fashion</li></a>
              <a href="#"><li>Lifestyle</li></a>
              <a href="#"><li>Blueprint</li></a>
            </ul>
          </div>
        </div>
      </div>
      <p className='-mt-14 ml-20 mr-40 pb-10 z-10 font-rale'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos magni laudantium eius fugiat doloremque? <br />Incidunt, non nam? Illum hic quisquam assumenda eaque. Animi praesentium illum, nihil et eveniet temporibus totam. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto dignissimos dolorum repudiandae qui vitae laboriosam voluptates cumque, nesciunt magnam vero alias, odio asperiores porro eum at maxime eligendi illum?</p>


    </div>
  );
}
 
export default Section4home;