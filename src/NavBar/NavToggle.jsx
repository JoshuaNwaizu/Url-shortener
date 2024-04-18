import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
const NavToggle = ({ isOpen, onOpenNav }) => {
  return (
    <div
      className={
        isOpen
          ? "text-4xl text-[#9E9AA8] rotate-180 duration-700 font-bold min-[1024px]:hidden"
          : "text-4xl text-[#9E9AA8] -rotate-150 duration-700 font-bold min-[1024px]:hidden"
      }
      onClick={() => onOpenNav()}
    >
      {isOpen ? <IoCloseSharp /> : <AiOutlineMenu />}
    </div>
  );
};

export default NavToggle;
