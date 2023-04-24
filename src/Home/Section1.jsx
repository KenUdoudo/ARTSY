import CarouselOne from './assets/Homepage carousel WEB.png'
import CarouselTwo from './assets/Homepage carousel WEB (1).png'
import CarouselThree from './assets/Homepage carousel WEB (2).png'
import CarouselFour from './assets/Homepage carousel WEB (3).png'

const Section1home = () => {
  return (

    <div className="sec">
      <h2>Photography is poetry & <br/>beatiful untold stories</h2>

      <p>Flip through more than 10,000 vintage shots, old photographs, historic <br />images and captures seamlessly in one place. Register to get top access</p>

      <div>
        <img src={ CarouselOne }/>
        <img src={ CarouselTwo }/>
        <img src={ CarouselThree }/>
        <img src={ CarouselFour }/>
      </div>
    </div>

  );
}
 
export default Section1home;