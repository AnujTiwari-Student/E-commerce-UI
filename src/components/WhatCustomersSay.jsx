import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import rating from "../assets/star.png";

function WhatCustomersSay() {
  return (
    <main className="mt-24 mx-20">
      <h1 className="font-[800] text-[40px] text-center">
        What Customers Are Saying
      </h1>
      <div className="mt-10 flex gap-10 text-justify justify-between items-center ">
        <div className="flex flex-col w-[35rem] border rounded-bl-[15px] rounded-tr-[15px] border-zinc-800 p-10">
          <div className="flex gap-10">
            <img src={user1} className="h-[88px] w-[88px]" alt="" />
            <div className="flex flex-col">
              <h2 className="font-[800] text-[38px]">Maxn Raval</h2>
              <img src={rating} alt="" />
            </div>
          </div>
          <p className="font-[300] text-[24px] text-white/75 leading-[29.05px] mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint delectus dicta voluptatum quam molestiae, distinctio
            exercitationem incidunt nisi quo. Eligendi, unde totam maxime optio
            recusandae veniam
          </p>
        </div>

        <div className="flex flex-col w-[35rem] border rounded-bl-[15px] rounded-tr-[15px] border-zinc-800 p-10">
          <div className="flex gap-10">
            <img
              src={user2}
              className="rounded-full h-[88px] w-[88px]"
              alt=""
            />
            <div className="flex flex-col">
              <h2 className="font-[800] text-[38px]">venely k</h2>
              <img src={rating} alt="" />
            </div>
          </div>
          <p className="font-[300] text-[24px] text-white/75 leading-[29.05px] mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint delectus dicta voluptatum quam molestiae, distinctio
            exercitationem incidunt nisi quo. Eligendi, unde totam maxime optio
            recusandae veniam
          </p>
        </div>

        <div className="flex flex-col w-[35rem] border rounded-bl-xl rounded-tr-xl border-zinc-800 p-10">
          <div className="flex gap-10">
            <img src={user3} className="h-[88px] w-[88px]" alt="" />
            <div className="flex flex-col">
              <h2 className="font-[800] text-[38px]">Lii Thakur</h2>
              <img src={rating} alt="" />
            </div>
          </div>
          <p className="font-[300] text-[24px] text-white/75 leading-[29.05px] mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint delectus dicta voluptatum quam molestiae, distinctio
            exercitationem incidunt nisi quo. Eligendi, unde totam maxime optio
            recusandae veniam
          </p>
        </div>
      </div>
    </main>
  );
}
export default WhatCustomersSay;
