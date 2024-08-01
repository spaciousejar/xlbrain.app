import React from "react";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="w-auto h-auto flex items-start opacity-30 absolute  justify-center bg-cover">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-auto h-auto"
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
