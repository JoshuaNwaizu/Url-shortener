import React from "react";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link to="home" spy={true} smooth={true} offset={-120} duration={100}>
      <div className="cursor-pointer flex items-center justify-center">
        {/* <h1 className="text-4xl font-bold flex-shrink-0 ">Shortly</h1> */}
        <img
          src="/logo.svg"
          alt="Shortly logo"
          className="h-[2.1rem] mt-3 flex items-center justify-center z-10 "
        />
      </div>
    </Link>
  );
};

export default Logo;
