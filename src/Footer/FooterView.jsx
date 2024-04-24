import React from "react";
import Logo from "../NavBar/Logo";
import FooterFeatures from "./FooterFeatures";
import FooterSocials from "./FooterSocials";

const FooterView = () => {
  return (
    <div className="py-9 bg-[#232127]">
      {/* <Logo /> */}
      <FooterFeatures />
      <FooterSocials />
    </div>
  );
};

export default FooterView;
