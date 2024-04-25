import React from "react";

const NavBar = ({ children }) => {
  return (
    <header className="fixed top-0 w-full left-0 h-[4.5rem] flex items-center z-10 min-[1024px]:justify-around min-[1024px]:mx bg-[#fff]">
      <nav className="mx-6 flex flex-row items-center justify-between w-full  min-[768px]:mx-10  min-[1024px]:h-[6rem]  min-[1024px]:mx-[5.5rem] min-[1152px]:mx-[8rem] min-[884px]:mx-14">
        {children}
      </nav>
    </header>
  );
};

export default NavBar;
