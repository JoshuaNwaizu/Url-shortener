import React, { useEffect } from 'react';
import Lists from './Lists';

const NavLists = ({ onOpen, onOpenNav, setIsOpen }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 50) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsOpen]);
  return (
    <>
      <div
        className={
          onOpen
            ? 'w-full absolute max-[1023px]:top-[4.4rem] min-[1024px]:top-0 left-0  transition-all duration-3 00'
            : 'w-full absolute max-[1023px]:-top-[33rem] left-0 top-[1rem]  transition-all duration-300'
        }
      >
        <Lists
          onOpenNav={onOpenNav}
          onOpen={onOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
};

export default NavLists;
