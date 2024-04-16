import React from "react";
import Lists from "./Lists";

const NavLists = ({ onOpen }) => {
  return (
    <div
      className={
        onOpen
          ? "w-full absolute top-[5rem] left-0 transition-all duration-500"
          : "w-full absolute -top-[25rem] left-0 transition-all duration-300"
      }
    >
      <Lists />
    </div>
  );
};

export default NavLists;
