import React from "react";

const HomeImg = () => {
  return (
    <div className="w-[35rem]  min-[768px]:order-last  min-[768px]:w-[65rem] ">
      <img
        src="/images/illustration-working.svg"
        alt="Working illustration"
        className="w-[34rem] translate-x-[2rem] min-[768px]:w-[50rem] min-[820px]:w-[70rem] min-[820px]:-translate-x-[1rem] min-[768px]:translate-x-[3rem]  min-[1024px]:translate-x-[4rem]"
      />
    </div>
  );
};

export default HomeImg;
