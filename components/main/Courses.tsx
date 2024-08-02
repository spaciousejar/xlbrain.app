import React from "react";
import Card from "../sub/Card";

const Courses = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="course"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
         Courses
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
        <Card
          src="/cjb.png"
          title="Motivation by Vicky"
          description="Unlock your inner strength and drive with Vicky's motivational course. Learn how to overcome self-doubt, build confidence, and achieve your goals."
        />
      </div>
    </div>
  );
};

export default Courses;
