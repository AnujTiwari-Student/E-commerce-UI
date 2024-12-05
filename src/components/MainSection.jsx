import first from "../assets/1.mp4";
import second from "../assets/2.mp4";
import third from "../assets/3.mp4";
import fourth from "../assets/4.mp4";
import Footer from "./Footer";
import Pricing from "./Pricing";
import WhatCustomersSay from "./WhatCustomersSay";

function MainSection() {
  return (
    <main className="mt-16 p-10">
      <h1 className="text-center font-[800] text-[40px]">
        A video platform designed for growth
      </h1>

      <p className="text-center text-[24px] font-normal">
        Built to engage, convert, and amaze your users with all-in-one video
        commerce platform
      </p>

      <div className="grid grid-cols-2 gap-6 mt-20 w-[90%] mx-auto ">
        {/* On-store Shoppable Videos */}
        <div className="flex flex-col border border-zinc-800 rounded-[15px]">
          <div className="bg-[#131417] p-4 rounded-t-[15px]">
            <h3 className="font-[700] text-[24px] text-white">
              On-store Shoppable Videos
            </h3>
            <p className="text-[18px] font-[300] text-white/50">
              Work better together, ship faster, and avoid unauthorized changes
              with advanced roles and permissions more.
            </p>
          </div>
          <video
            loading="lazy"
            src={first}
            autoPlay
            loop
            className="w-full h-auto rounded-b-[15px]"
          />
        </div>

        {/* Interactive & Quiz Videos */}
        <div className="flex flex-col border border-zinc-800 rounded-[15px]">
          <div className="bg-[#131417] p-4 rounded-t-[15px]">
            <h3 className="font-[700] text-[24px] text-white">
              Interactive & Quiz Videos
            </h3>
            <p className="text-[18px] font-[300] text-white/50">
              Work better together, ship faster, and avoid unauthorized changes
              with advanced roles and permissions more.
            </p>
          </div>
          <video
            loading="lazy"
            src={second}
            autoPlay
            loop
            className="w-full h-auto rounded-b-[15px]"
          />
        </div>

        {/* On-store Shoppable Videos */}
        <div className="flex flex-col border border-zinc-800 rounded-[15px]">
          <div className="bg-[#131417] p-4 rounded-t-[15px]">
            <h3 className="font-[700] text-[24px] text-white">
              On-store Shoppable Videos
            </h3>
            <p className="text-[18px] font-[300] text-white/50">
              Work better together, ship faster, and avoid unauthorized changes
              with advanced roles and permissions more.
            </p>
          </div>
          <video
            src={third}
            autoPlay
            loading="lazy"
            loop
            className="w-full h-auto rounded-b-[15px]"
          />
        </div>

        {/* Interactive & Quiz Videos */}
        <div className="flex flex-col border border-zinc-800 rounded-[15px]">
          <div className="bg-[#131417] p-4 rounded-t-[15px]">
            <h3 className="font-[700] text-[24px] text-white">
              Interactive & Quiz Videos
            </h3>
            <p className="text-[18px] font-[300] text-white/50">
              Work better together, ship faster, and avoid unauthorized changes
              with advanced roles and permissions more.
            </p>
          </div>
          <video
            src={fourth}
            autoPlay
            loop
            loading="lazy"
            className="w-full h-auto rounded-b-[15px]"
          />
        </div>
      </div>

      <WhatCustomersSay />

      <Pricing />

      <Footer />
    </main>
  );
}
export default MainSection;
