import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const NavToggle = ({ isOpen, onOpenNav }) => {
  return (
    <div className="text-4xl text-[#9E9AA8]" onClick={() => onOpenNav()}>
      {isOpen ? <IoCloseSharp /> : <AiOutlineMenu />}
    </div>
  );
};

export default NavToggle;
