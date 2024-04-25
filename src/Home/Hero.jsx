import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="text-center flex flex-col gap-5 items-center justify-center  min-[768px]:text-left  min-[768px]:items-start  min-[820px]:w-[400px]">
      <div>
        <h1 className="text-4xl font-bold  min-[768px]:text-[2.7rem] leading-[3rem]  min-[1024px]:text-[3rem]  min-[1024px]:leading-[4rem]">
          More than just shorter links
        </h1>
      </div>
      <div>
        <p className="text-[#9E9AA8]">
          Build your brand’s recognition and get detailed insights on how your links
          are performing.
        </p>
      </div>
      {children}
    </div>
  );
};

export default Hero;
