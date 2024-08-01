import React from "react";
import SkillText from "../sub/Text";

const Skills = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="opacity-30">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-fit h-auto"
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
