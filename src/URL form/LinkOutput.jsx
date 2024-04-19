import React from "react";
import Button from "../Button";

const LinkOutput = ({ getUrl }) => {
  return (
    <div className="mx-5 -translate-y-[6.5rem] flex flex-col">
      {getUrl.url.map((item) => (
        <div
          className="bg-[#fff] flex flex-col py-5 px-5 gap-3 mb-7 rounded-lg "
          key={item.secondInput}
        >
          <p className="text-[1.2rem] tracking-[0.12px] font-medium leading-9 text-[#34313D]">
            {item.firstInput}
          </p>
          <hr />
          <p className="text-[1.2rem] tracking-[0.12px] font-medium leading-9 text-[#2BD0D0]">
            {item.secondInput}
          </p>
          <div className="flex items-center justify-center ">
            <Button
              text="Copy"
              style="bg-[#2BD0D0] py-3 w-[21rem] min-[1024px]:w-[10rem] rounded-md text-[20px] font-bold text-[#fff] "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkOutput;
