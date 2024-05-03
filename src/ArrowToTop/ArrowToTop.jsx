import React, { useEffect, useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const ArrowToTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleArrowOpen = () => {
      const scrollY = window.scrollY;
      setIsOpen(scrollY >= 50);
    };
    window.addEventListener('scroll', handleArrowOpen);
  }),
    [];

  return (
    <div>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-120}
        duration={100}
      >
        <motion.a
          initial={{ y: isOpen && -250 }}
          animate={{ y: isOpen && 0 }}
          href=""
          className={` fixed right-[1rem] inline-flex bottom-[-50%] font-bold text-xl text-[#2BD0D0] bg-[#FFF] p-3 shadow-md rounded-lg ${
            isOpen ? 'bottom-[4rem] transition-all duration-300' : undefined
          }`}
        >
          <IoArrowUpOutline />
        </motion.a>
      </Link>
    </div>
  );
};
export default ArrowToTop;
