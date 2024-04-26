import React from "react";

const Boost = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-5 py-[7rem] bg-[url('/images/bg-boost-mobile.svg')] bg-[length:450px_350px] bg-[#3A3054] min-[884px]:bg-[url('/images/bg-boost-desktop.svg')] min-[884px]:bg-[length:950px_350px] min-[1280px]:bg-[length:1300px_350px]">
        <div>
          <h1 className="text-3xl font-bold text-[#fff]">Boost your links today</h1>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Boost;
