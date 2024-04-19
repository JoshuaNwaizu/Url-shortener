import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="text-center flex flex-col gap-5 items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold">More than just shorter links</h1>
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
