import React from "react";

const NavBar = ({ children }) => {
  return (
    <header className="fixed top-0 w-full left-0 h-20 flex items-center z-10 min-[1024px]:justify-around min-[1024px]:mx bg-[#fff]">
      <nav className="mx-6 flex flex-row items-center justify-between w-full min-[1024px]:h-[5rem]  min-[1024px]:mx-16 min-[1152px]:mx-[8rem]">
        {children}
      </nav>
    </header>
  );
};

export default NavBar;
