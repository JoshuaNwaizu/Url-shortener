import React from 'react';
import Logo from '../NavBar/Logo';
import FooterFeatures from './FooterFeatures';
import FooterSocials from './FooterSocials';

const FooterView = () => {
  return (
    <footer className="py-9 bg-[#232127] min-[1280px]:flex min-[1280px]:flex-row min-[1280px]:gap-[4rem] min-[1280px]:items-start min-[1280px]:justify-center min-[1280px]:pb-20 min-[1400px]:gap-[7rem]">
      {/* <Logo /> */}
      <FooterFeatures />
      <FooterSocials />
    </footer>
  );
};

export default FooterView;
