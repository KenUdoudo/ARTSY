import sec2img1 from './assets/Rectangle 236.png'
import groupProfile from './assets/Group 526people.png'

const Section2home = () => {
  return (
    <div className="mx-20">
      <h3 className="mt-14 text-2xl text-gray-700">Featured products</h3>

      <div>
        <hr className="my-6"/>
        <div className='flex flex-row gap-x-8'>
          <img src={ sec2img1 }/>
          <div className='flex flex-col gap-y-6'>
            <h3 className='text-xl font-bold'>The Boolean Egyptian</h3>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ad deleniti delectus cum at harum ipsum fugiat laboriosam culpa vitae, sed cumque iure corrupti exercitationem enim odit. Explicabo, voluptates praesentium!</p>
            <div>
              <img src={ groupProfile }/>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
 
export default Section2home;