import herogif from "../assets/herogif.gif";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <main className="flex relative" style={{ height: "calc(100vh - 54px)" }}>
      <div className="absolute z-50 w-[763px] top-[30%] left-[8%] flex flex-col gap-10">
        <h1 className="font-[800] text-[75px] leading-[82.5px]">
          E-Commerce Video Platform
        </h1>
        <p className="text-[22px]">
          Packed with lightning-fast Shoppable videos, Interactive video
          quizzes, Live-stream shopping & more – All 3x faster than YouTube
        </p>
        <Button className="bg-[#E74FA5] rounded-[15px] hover:bg-[#E74FA5]/90 p-[10px] w-[111px]">
          Get Started
        </Button>
      </div>

      <div>
        <img src={herogif} alt="" className="h-full absolute right-0" />
      </div>
    </main>
  );
}
export default HeroSection;
