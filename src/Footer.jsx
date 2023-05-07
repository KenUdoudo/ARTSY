const Footer = () => {
  return (
    <div className="mt-40">
      <div>
        <h3>NEWSLETTER</h3>
        <p>Subscribe to get daily updates on news drops & exciting deals</p>
        <div>
          <form>
            <input type="email" placeholder="ENTER YOUR EMAIL" className="border-2 border-gray-500 pl-5 pr-16 py-1 text-sm"/>
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;