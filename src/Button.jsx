import React from "react";
import { motion } from "framer-motion";

const styles =
  " bg-[#2BD0D0] py-3 w-[18rem] min-[1024px]:w-[10rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]";

const Button = ({
  style = styles,
  text = "Get Started",
  onHandleClick,
  disabled,
  hover,
  // tap,
  // focus,
}) => {
  return (
    <div>
      <motion.button
        whileHover={{ backgroundColor: hover }}
        // whileTap={{ backgroundColor: tap }}
        // whileFocus={{ backgroundColor: focus }}
        className={style}
        onClick={onHandleClick}
        disabled={disabled}
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;
