import React, { useState } from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import NavMenu from './NavMenu';
import NavLists from './NavLists';
import NavToggle from './NavToggle';

const NavBarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      {/* FIXME: Nav bar component */}
      <NavBar>
        <Logo />
        <NavMenu>
          <NavLists
            onOpen={isOpen}
            onOpenNav={handleOpenNav}
            setIsOpen={setIsOpen}
          />
          <NavToggle
            isOpen={isOpen}
            onOpenNav={handleOpenNav}
          />
        </NavMenu>
      </NavBar>
    </>
  );
};

export default NavBarContainer;
