import React from "react";
import Videoplayer from "../sub/Card";

const Courses = () => {
  return (
      <><div
      className="flex flex-col items-center justify-center py-2"
      id="course"
    >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Courses
        </h1>
      </div>
    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
      <p className="text-lg text-white my-5 max-w-[600px] flex-wrap">
        <h2 className="text-[25px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Course Highlights
        </h2>
        Harness the power of visualization to improve memory retention and
        comprehension.
        Learn how to create mental images to represent complex information.
        Discover effective learning techniques like the Casting Director Method.
        Engage with real-life examples and stories to see how these methods in
        practice.
        Join XL BRAIN and take your learning to the next level. Let's make learning a
        visual, engaging, and impactful experience!
      </p>
        <Videoplayer 
        src="https://www.youtube.com/embed/hHuG7FIKgtc?si=0TQ6reJOghpJjPpP" 
        title=""
        description=""/>
    </div></>
    
  );
};

export default Courses;
