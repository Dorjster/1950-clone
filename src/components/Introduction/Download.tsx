import Image from "next/image";
import React from "react";

const Download = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-[40px] mt-4">
        {" "}
        <div className="text-white text-5xl font-medium">
          Яаралтай Такси дуудах бол?
        </div>
        <p className="text-white text-4xl">1950 Апп татаарай</p>
      </div>

      <div className="flex gap-4 mt-4">
        {" "}
        <button className=" bg-white flex w-[18%] rounded-full py-[15px] items-center gap-[30px] px-[20px] cursor-pointer ">
          <Image src="/apple.svg" alt="apple store" width={40} height={50} />
          <div className="cursor-pointer">
            {" "}
            Available on the
            <br />{" "}
            <span className="text-slate-500 cursor-pointer">App Store</span>
          </div>
        </button>
        <button className="bg-white flex w-[18%] rounded-full py-[15px] items-center gap-[30px] px-[20px] ">
          <Image src="/playstore.svg" alt="playstore" width={40} height={50} />
          <div>
            {" "}
            Get in on
            <br /> <span className="text-slate-500">Google Play</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Download;
