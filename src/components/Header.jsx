import cart from "../assets/cart.png";
import { Button } from "./ui/button";

function Header() {
  return (
    <nav className="flex justify-between items-center w-full p-5 h-[54px] bg-black">
      <div className="flex items-center space-x-2">
        <img src={cart} alt="" />
        <p className="uppercase font-itim font-semibold text-[#A47877]">
          shop reel
        </p>
      </div>

      <ol className="flex space-x-10 items-center list-none text-white/50">
        <li>Product</li>
        <li>Customer Stories</li>
        <li>Resources</li>
        <li>Pricing</li>
      </ol>

      <Button className="bg-[#E74FA5] rounded-[15px] hover:bg-[#E74FA5]/90 p-[10px]">
        Get Started
      </Button>
    </nav>
  );
}
export default Header;
