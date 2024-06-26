import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
const NavToggle = ({ isOpen, onOpenNav }) => {
  return (
    <div
      className={
        isOpen
          ? 'text-4xl text-[#9E9AA8] rotate-90 duration-300 font-bold min-[1024px]:hidden'
          : 'text-4xl text-[#9E9AA8] -rotate-130 duration-300 font-bold min-[1024px]:hidden'
      }
      onClick={() => onOpenNav()}
    >
      {isOpen ? <IoCloseSharp /> : <HiMenu />}
    </div>
  );
};

export default NavToggle;
