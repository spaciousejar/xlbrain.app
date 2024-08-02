import React from "react";
import { BorderBeam } from "../magicui/border-beam";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      
  <div className="container mx-auto text-center mt-8 border-t border-transparent pt-4">
  <BorderBeam size={15}/>
    <p className="text-sm">&copy; {new Date().getFullYear()} Xlbrain, Inc.</p>
    <a href="https://github.com/spaciousejar" className="inline-block ml-2 hover:text-gray-400">GitHub</a>
    <a href="#" className="inline-block ml-2 hover:text-gray-400">X</a>
  </div>
</footer>

  );
}
export default Footer