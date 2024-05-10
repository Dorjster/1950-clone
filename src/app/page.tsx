import Car from "@/components/Introduction/Car";
import Download from "@/components/Introduction/Download";
import Status from "@/components/Introduction/Status";
import Svg from "@/components/Introduction/Svg";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-black  w-screen h-screen">
      {/* <div className="w-[20%] absolute  top-[15%] py-[25px] ml-[9%]"> */}
      {/* <div className="w-[22%] ml-[8%] pt-[3%]">
        {" "}
        <Status />
      </div> */}
      <div className="">
        <Svg />
      </div>
      <div className="w-[90%] h-[40%] ml-[8%]   mt-[2%] absolute py-[20px]">
        <Download />
      </div>
      <div className="absolute z-50 bottom-[-000px] w-full ">
        <div
          className="w-full absolute bottom-12 z-0 "
          style={{
            borderBottom: "2px solid #4B5563",
          }}
        ></div>
        <Car />
        <div
          className="w-full absolute bottom-0 z-0 "
          style={{
            borderBottom: "2px dashed #FDFDFD",
          }}
        ></div>
        <div
          className="w-full absolute -bottom-12 z-0 "
          style={{
            borderBottom: "2px solid #4B5563",
          }}
        ></div>
      </div>
    </div>
  );
};

export default page;
