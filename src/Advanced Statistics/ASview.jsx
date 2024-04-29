import React from "react";
import ASHero from "./ASHero";
import ASCards from "./ASCards";

const ASview = () => {
  return (
    <section id="statistics">
      <div className="bg-[#EFF1F7] mt-[-3rem] pb-7">
        <ASHero />
        <ASCards />
      </div>
    </section>
  );
};

export default ASview;
