import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <div className="cursor-pointer flex items-center justify-center">
      {/* <h1 className="text-4xl font-bold flex-shrink-0 ">Shortly</h1> */}
      <motion.img
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
        src="/logo.svg"
        alt="Shortly logo"
        className="h-[2.1rem] mt-3 flex items-center justify-center z-10 "
      />
    </div>
  );
};

export default Logo;
