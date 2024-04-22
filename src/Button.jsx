import React from "react";

const styles =
  " bg-[#2BD0D0] py-3 w-[18rem] min-[1024px]:w-[10rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff]";

const Button = ({
  style = styles,
  text = "Get Started",
  onHandleClick,
  disabled,
}) => {
  return (
    <div>
      <button className={style} onClick={onHandleClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

export default Button;
