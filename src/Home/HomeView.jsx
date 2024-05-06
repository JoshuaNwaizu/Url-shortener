import React from 'react';
import Home from './Home';
import HomeImg from './HomeImg';
import HeroContainer from './HeroContainer';
import Hero from './Hero';
import Button from '../Button';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HomeView = () => {
  return (
    <>
      {/* FIXME: Home Component */}
      <Home>
        <HomeImg />
        <HeroContainer>
          <Hero>
            <motion.div
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                to="form"
                spy={true}
                smooth={true}
                offset={-120}
                duration={100}
              >
                <Button
                  style="bg-[#2BD0D0] py-3 w-[12rem] min-[1024px]:w-[13rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]  "
                  hover={'#9AE3E3'}
                />
              </Link>
            </motion.div>
          </Hero>
        </HeroContainer>
      </Home>
    </>
  );
};

export default HomeView;
