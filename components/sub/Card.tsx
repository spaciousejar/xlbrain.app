import Image from "next/image";
import React from "react";
import { BorderBeam } from "../magicui/border-beam";
import { Video } from "lucide-react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const Videoplayer = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <BorderBeam/>
       <iframe
        width="560"
        height="315" 
        src={src}
        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
       </iframe>

    </div>
  );
};

export default Videoplayer;
