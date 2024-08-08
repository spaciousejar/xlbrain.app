"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { AnimatedBeam } from "../magicui/animated-beam";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import AnimatedGradientText from "../magicui/animated-gradient-text";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center mx-auto">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[rgba(139,139,139,0)] opacity-[0.9] mx-auto"
        >
          <SparklesIcon className="text-[#eeedf3] mr-[10px] h-5 w-5" />
            <h1 className="text-[#eeedf3]">
            <AnimatedGradientText children={"Welcome to XLBRAIN!"}></AnimatedGradientText>
            </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
              <span>
              Exprience
            </span>
            
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-white my-5 max-w-[600px] mx-auto">
          Unlock your learning potential with XL BRAIN, the ultimate course designed to
          give you a competitive edge. In today&apos;s fast-paced world, mastering effective
          learning techniques is essential. XL BRAIN is here to enhance your ability to
          understand and retain information like never before.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto"
        >
         Learn More!
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;