import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#0b0909] max-w-screen flex flex-wrap items-center justify-between mx-auto px-[100px]  border-b-[1px] border-gray-600   ">
      <Image src="/1950.svg" alt="" width={80} height={36} />
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-stone-950 dark:border-gray-700">
        <li className="text-white text-[16px] font-[400] block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent  md:p-0 cursor-pointer ">
          Танилцуулга
        </li>
        <li className="text-white text-[16px] font-[400] block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:p-0  cursor-pointer">
          Боломжууд
        </li>
        <li className="text-white text-[16px] font-[400] block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent  md:p-0 cursor-pointer">
          Холбоо барих
        </li>
      </ul>
      <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-[10px]">
        Жолооч болох ?
      </button>
    </header>
  );
};

export default Header;
