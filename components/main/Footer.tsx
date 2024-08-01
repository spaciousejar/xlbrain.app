import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint facilis error aperiam incidunt neque ipsam vero ducimus maiores doloremque, voluptate repellat! Provident quasi est error ducimus quod laborum libero natus?</p>
      </div>
      <div className="w-full h-20 text-white flex items-center justify-center">
        <p>Copyright {new Date().getFullYear()} xlbrain. All rights reserved.</p>
      </div>
    </div>
  );
}
export default Footer