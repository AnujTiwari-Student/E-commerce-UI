import { Button } from "./ui/button";

function Pricing() {
  return (
    <div className="mx-20 mt-20">
      <h1 className="text-center font-[800] text-[40px]">
        Get started with a 14 day free trial today
      </h1>

      <div className="flex justify-center items-center">
        <Button className="bg-[#E74FA5] rounded-[15px] hover:bg-[#E74FA5]/90 p-[10px] w-[111px] mt-10">
          Get Started
        </Button>
      </div>

      <div className="mt-20">
        <p className="uppercase font-[300] text-[1rem] text-center">
          shop with a swipe
        </p>
        <h1 className="text-center font-[800] text-[40px]">
          Find the right plan for your needs
        </h1>
      </div>

      <div className="flex justify-around mt-10 mx-48">
        <div className="flex flex-col p-10 rounded-[15px] border border-zinc-800">
          <div>
            <Button className="rounded-[15px]">PRO</Button>
            <h1 className="font-[500] text-[32px] mt-2">$00/mo</h1>
            <p className="font-[300] text-[12px]">what&apos;s included:</p>
            <ol className="list-none font-[400] text-[12px] px-5">
              <li>15,000 views per month</li>
              <li>Unlimited Impressions</li>
              <li>Email customer support</li>
              <li>Analytics Dashboard</li>
              <li>Priority Email and WhatsApp Support</li>
              <li>Shoppable tags in videos</li>
            </ol>
          </div>
          <Button className="bg-black rounded-[15px] mt-5 text-white border border-white">
            Start Free Trial
          </Button>
        </div>

        <div className="flex flex-col p-10 rounded-[15px] border border-zinc-800">
          <div>
            <Button className="rounded-[15px]">PRO</Button>
            <h1 className="font-[500] text-[32px] mt-2">$00/mo</h1>
            <p className="font-[300] text-[12px]">what&apos;s included:</p>
            <ol className="list-none font-[400] text-[12px] px-5">
              <li>15,000 views per month</li>
              <li>Unlimited Impressions</li>
              <li>Email customer support</li>
              <li>Analytics Dashboard</li>
              <li>Priority Email and WhatsApp Support</li>
              <li>Shoppable tags in videos</li>
            </ol>
          </div>
          <Button className="bg-black rounded-[15px] mt-5 text-white border border-white">
            Start Free Trial
          </Button>
        </div>

        <div className="flex flex-col p-10 rounded-[15px] border border-zinc-800">
          <div>
            <Button className="rounded-[15px]">PRO</Button>
            <h1 className="font-[500] text-[32px] mt-2">$00/mo</h1>
            <p className="font-[300] text-[12px]">what&apos;s included:</p>
            <ol className="list-none font-[400] text-[12px] px-5">
              <li>15,000 views per month</li>
              <li>Unlimited Impressions</li>
              <li>Email customer support</li>
              <li>Analytics Dashboard</li>
              <li>Priority Email and WhatsApp Support</li>
              <li>Shoppable tags in videos</li>
            </ol>
          </div>
          <Button className="bg-black rounded-[15px] mt-5 text-white border border-white">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
