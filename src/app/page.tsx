"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Car from "@/components/Introduction/Car";
import Download from "@/components/Introduction/Download";
import Svg from "@/components/Introduction/Svg";
import Intro from "@/components/Oportunities/Intro";
import Tilter from "@/components/Oportunities/Tilt";

const Page: React.FC = () => {
  const introductionRef = useRef<HTMLDivElement>(null);
  const opportunitiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToIntroduction = () => {
    if (introductionRef.current) {
      introductionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToOpportunities = () => {
    if (opportunitiesRef.current) {
      opportunitiesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="sticky top-0 z-10 bg-[#0b0909] max-w-screen flex flex-wrap items-center justify-between mx-auto px-[100px] border-b-[1px] border-gray-600">
        <Image src="/1950.svg" alt="" width={80} height={36} />
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-stone-950 dark:border-gray-700">
          <li
            className="text-white text-[16px] font-[400] block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer"
            onClick={scrollToIntroduction}
          >
            Танилцуулга
          </li>
          <li
            className="text-white text-[16px] font-[400] block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer"
            onClick={scrollToOpportunities}
          >
            Боломжууд
          </li>
          <li
            className="text-white text-[16px] font-[400] block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0 cursor-pointer"
            onClick={scrollToContact}
          >
            Холбоо барих
          </li>
        </ul>
        <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded-[10px]">
          Жолооч болох ?
        </button>
      </header>
      <main>
        <div
          className="bg-black w-screen h-screen pt-[20px]"
          ref={introductionRef}
        >
          <Svg />
          <div className="w-[90%] h-[40%] ml-[8%] mt-[2%] absolute py-[20px]">
            <Download />
          </div>
          <div className="absolute bottom-[-000px] w-full">
            <div
              className="w-full absolute bottom-12"
              style={{ borderBottom: "2px solid #4B5563" }}
            ></div>
            <Car />
            <div
              className="w-full absolute bottom-0 z-0"
              style={{ borderBottom: "2px dashed #FDFDFD" }}
            ></div>
            <div
              className="w-full absolute -bottom-12 z-0"
              style={{ borderBottom: "2px solid #4B5563" }}
            ></div>
          </div>
        </div>
        <div
          className="w-full h-screen bg-black relative top-0 z-0 pt-[50px]"
          ref={opportunitiesRef}
        >
          <Image
            src="/back.svg"
            alt=""
            className="w-full h-full object-cover absolute top-0 "
            layout="fill"
          />
          <div className="w-full h-full absolute px-[100px] flex flex-col gap-[80px] py-[50px]">
            <Intro />
            <Tilter />
          </div>
        </div>
        <div className="w-full bg-black h-[450px] pt-[10px]" ref={contactRef}>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Page;
