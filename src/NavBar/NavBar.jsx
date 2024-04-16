import React from "react";

const NavBar = ({ children }) => {
  return (
    <header className="fixed top-0 w-full left-0 h-20 flex items-center z-10">
      <nav className="ml-6 flex flex-row items-center justify-between w-full mr-6">
        {children}
      </nav>
    </header>
  );
};

export default NavBar;
