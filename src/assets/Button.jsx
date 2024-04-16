import React from "react";

const styles =
  " bg-[#2BD0D0] py-3 w-[18rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]";

const Button = ({ style = styles, text = "Get Started" }) => {
  return (
    <div>
      <button className={style}>{text}</button>
    </div>
  );
};

export default Button;
