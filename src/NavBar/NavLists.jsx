import React from "react";
import Lists from "./Lists";

const NavLists = ({ onOpen }) => {
  return (
    <div
      className={
        onOpen
          ? "w-full absolute max-[1023px]:top-[5rem] min-[1024px]:top-0 left-0 transition-all duration-500"
          : "w-full absolute max-[1023px]:-top-[27rem] left-0 top-[1rem]  transition-all duration-300"
      }
    >
      <Lists />
    </div>
  );
};

export default NavLists;
