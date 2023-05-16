import out from './assets/Group 527.png'
import fall from './assets/Group 528 (1).png'
const Section2auction = () => {
  return (
    <div className="mx-20">
      <p className="mt-20 font-semibold">Top bids from popular creators</p>

      <div>
        <div>
          <img src={ out } />
          <p className='text-gray-600 font-semibold text-lg'>Creator: <span className='text-black'>Dan Murray</span></p>
        </div>
      </div>
    </div>
  );
}
 
export default Section2auction;