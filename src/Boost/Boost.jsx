import React from "react";

const Boost = ({ children }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-5 py-[7rem] bg-[url('/images/bg-boost-mobile.svg')] bg-[length:450px_350px] bg-[#3A3054] ">
        <div>
          <h1 className="text-3xl font-bold text-[#fff]">Boost your links today</h1>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Boost;
