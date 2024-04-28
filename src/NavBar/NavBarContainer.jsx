import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavLists from "./NavLists";
import NavToggle from "./NavToggle";

const NavBarContainer = ({ isOpen, onOpenNav, setIsOpen }) => {
  return (
    <>
      {/* FIXME: Nav bar component */}
      <NavBar onOpenNav={onOpenNav}>
        <Logo />
        <NavMenu>
          <NavLists onOpen={isOpen} onOpenNav={onOpenNav} setIsOpen={setIsOpen} />
          <NavToggle isOpen={isOpen} onOpenNav={onOpenNav} />
        </NavMenu>
      </NavBar>
    </>
  );
};

export default NavBarContainer;
