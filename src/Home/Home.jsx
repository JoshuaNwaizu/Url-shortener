import React from "react";
import { motion } from "framer-motion";

const Home = ({ children }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="mt-[5rem] overflow-x-hidden min-[720px]:flex min-[720px]:flex-row  min-[720px]:justify-center  min-[768px]:items-center min-[720px]:mt-[7rem]  min-[720px]:ml-7  min-[820px]:ml-9 min-[884px]:ml-12 min-[1024px]:ml-16  min-[1024px]:mt-[9rem]  min-[1024px]:mb-[-3.5rem] min-[1280px]:ml-[6rem] min-[1400px]:ml-[4rem]"
    >
      {children}
    </motion.section>
  );
};

export default Home;
