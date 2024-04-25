import React from "react";

const Logo = () => {
  return (
    <div className="cursor-pointer flex items-center justify-center">
      {/* <h1 className="text-4xl font-bold flex-shrink-0 ">Shortly</h1> */}
      <img
        src="/logo.svg"
        alt="Shortly logo"
        className="h-[2.1rem] mt-3 flex items-center justify-center z-10 "
      />
    </div>
  );
};

export default Logo;
