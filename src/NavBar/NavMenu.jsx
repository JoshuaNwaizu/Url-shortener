import React from "react";
import NavLists from "./NavLists";

const NavMenu = ({ children }) => {
  return <div className="flex flex-col items-center">{children}</div>;
};

export default NavMenu;
