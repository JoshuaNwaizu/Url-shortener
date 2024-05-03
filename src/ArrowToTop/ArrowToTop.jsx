import React, { useEffect, useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import { Link } from 'react-scroll';

const ArrowToTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleArrowOpen = () => {
      const scrollY = window.scrollY;
      setIsOpen(scrollY >= 100);
    };
    window.addEventListener('scroll', handleArrowOpen);
  }),
    [isOpen];

  return (
    <div>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-120}
        duration={100}
      >
        <div
          className={` fixed right-[1rem] min-[884px]:right-[3rem] inline-flex bottom-[-50%] font-bold text-xl text-[#2BD0D0] bg-[#FFF] p-3 min-[1024px]:p-5 min-[1024px]:text-[1.5rem] shadow-xl rounded-lg ${
            isOpen ? 'bottom-[4rem] transition-all duration-500 ' : undefined
          }`}
        >
          <IoArrowUpOutline />
        </div>
      </Link>
    </div>
  );
};
export default ArrowToTop;
