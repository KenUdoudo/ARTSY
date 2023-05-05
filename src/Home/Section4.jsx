import loader2 from './assets/Loader (1).png'
const Section4home = () => {
  return (
    <div className="bg-gray-200 mt-20">
      <div>
        <h2>TOP CREATORS OF <br />THE WEEK</h2>
        <div>
          <img src={ loader2 }/>
          <div>
            <ul>
              <a href="#"><li>Editorials</li></a>
              <a href="#"><li>Fashion</li></a>
              <a href="#"><li>Lifestyle</li></a>
              <a href="#"><li>Blueprint</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Section4home;