import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { BorderBeam } from "../magicui/border-beam";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
      
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/Logohwt.png"
            alt="logo"
            width={80}
            height={80}
            className="cursor-pointer hover:animate-pulse"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            XLBRAIN
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-end md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
               <BorderBeam size={50}/> 
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#features" className="cursor-pointer">
              Features
            </a>
            <a href="#course" className="cursor-pointer">
              Courses
            </a>
            <a href="#login" className="cursor-pointer">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
