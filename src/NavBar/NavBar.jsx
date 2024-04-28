import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NavBar = ({ children }) => {
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", mass: 0.4, damping: 4 }}
      className={`fixed top-0 w-full left-0 h-[4.5rem] flex items-center z-10 min-[1024px]:justify-around min-[1024px]:mx bg-[#fff] ${
        isScrolled ? "drop-shadow-xl transition-all duration-300" : undefined
      }`}
    >
      <nav className="mx-6 flex flex-row items-center justify-between w-full  min-[768px]:mx-14  min-[1024px]:h-[6rem]  min-[1024px]:mx-[5.5rem] min-[1152px]:mx-[8rem] min-[884px]:mx-14 min-[1280px]:mx-[8.5rem] min-[1400px]:mx-[10.5rem]">
        {children}
      </nav>
    </motion.header>
  );
};

export default NavBar;
