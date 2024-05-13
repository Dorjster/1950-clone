import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between gap-[55px]">
      {" "}
      <Image src="/1950.svg" alt="" width={80} height={36} />
      <div className="flex gap-4 mt-4">
        {" "}
        <button className=" bg-white flex w-[235px] rounded-full py-[15px] items-center gap-[30px] px-[20px] cursor-pointer ">
          <Image src="/apple.svg" alt="apple store" width={40} height={50} />
          <div className="cursor-pointer">
            {" "}
            Available on the
            <br />{" "}
            <span className="text-slate-500 cursor-pointer">App Store</span>
          </div>
        </button>
        <button className="bg-white flex w-[235px] rounded-full  items-center gap-[30px] px-[20px] ">
          <Image src="/playstore.svg" alt="playstore" width={40} height={50} />
          <div>
            {" "}
            Get in on
            <br /> <span className="text-slate-500">Google Play</span>
          </div>
        </button>
      </div>
      {/* <ul className="flex  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-stone-950 dark:border-gray-700">
        <li className="text-[#6B7381] text-[16px] font-[400] block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent  md:p-0 cursor-pointer ">
          Танилцуулга
        </li>
        <li className="text-[#6B7381] text-[16px] font-[400] block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:p-0  cursor-pointer">
          Боломжууд
        </li>
        <li className="text-[#6B7381] text-[16px] font-[400] block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent  md:p-0 cursor-pointer">
          Холбоо барих
        </li>
      </ul> */}
      <div className="text-white">Бүх эрх хуулиар хамгаалагдсан ©2023</div>
    </div>
  );
};

export default Footer;
