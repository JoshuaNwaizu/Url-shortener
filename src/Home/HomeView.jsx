import React from "react";
import Home from "./Home";
import HomeImg from "./HomeImg";
import HeroContainer from "./HeroContainer";
import Hero from "./Hero";
import Button from "../Button";

const HomeView = () => {
  return (
    <div>
      {/* FIXME: Home Component */}
      <Home>
        <HomeImg />
        <HeroContainer>
          <Hero>
            <Button style="bg-[#2BD0D0] py-3 w-[12rem] min-[1024px]:w-[13rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]  " />
          </Hero>
        </HeroContainer>
      </Home>
    </div>
  );
};

export default HomeView;
