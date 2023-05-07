const Footer = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col justify-center items-center gap-y-4 border-2 mx-10 py-10">
        <h3 className="text-lg">NEWSLETTER</h3>
        <p className="text-lg">Subscribe to get daily updates on news drops & exciting deals</p>
        <div>
          <form>
            <input type="email" placeholder="ENTER YOUR EMAIL" className="border-2 border-gray-500 pl-5 pr-16 py-1 text-sm"/>
            <button type="submit" className="text-sm text-white bg-black px-2 py-1 border-2 border-black">SUBSCRIBE</button>
          </form>
        </div>
      </div>



    </div>
  );
}
 
export default Footer;