const Footer = () => {
  return (
    <div className="mt-40">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <h3>NEWSLETTER</h3>
        <p>Subscribe to get daily updates on news drops & exciting deals</p>
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