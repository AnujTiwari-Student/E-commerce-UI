import cart from "../assets/cart1.png";
import social from "../assets/Social media icons.png";
import { Button } from "./ui/button";

function Footer() {
  return (
    <div className="mx-20 mt-28">
      <div className="flex justify-between items-center">
        <img src={cart} className="" alt="" />
        <div className="grid grid-cols-3 gap-20">
          <div>
            <h3 className="text-lg font-semibold mb-2">Get started</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Download app</li>
              <li className="hover:text-white cursor-pointer">New releases</li>
              <li className="hover:text-white cursor-pointer">Originals</li>
              <li className="hover:text-white cursor-pointer">Plans</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Account</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Sign in</li>
              <li className="hover:text-white cursor-pointer">Platform</li>
              <li className="hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Pride</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white cursor-pointer">Partners</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>
        </div>
        <Button className="bg-[#E74FA5] rounded-[15px] hover:bg-[#E74FA5]/90 p-[10px] w-[111px]">
          Get Started
        </Button>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center w-full">
        <div className="flex w-[961px] justify-between">
          <p className="text-center">
            Say goodbye to interruptions and enjoy uninterrupted music
            streaming.
          </p>
          <img src={social} alt="" />
        </div>

        <div className="border border-zinc-800 mt-10 w-full" />

        <div className="flex justify-between w-full items-center mt-10">
          <p>&copy; 2022 Pride</p>
          <p>Cookie Settings</p>
          <p>Terms and conditions</p>
          <p>Privacy Policy</p>
          <p>Modern Slavery Statement</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
