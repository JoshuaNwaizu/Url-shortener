import React, { useState } from "react";
import Button from "../Button";

const LinkOutput = ({ getUrl, urlErr }) => {
  const [isCopied, setIsCopied] = useState([]);

  const handleCopyLink = (item) => {
    navigator.clipboard.writeText(item);
    console.log("Copied:", item);

    setIsCopied((prevCopied) => [...prevCopied, item]);

    setTimeout(() => {
      setIsCopied([]);
    }, 4000);
  };

  return (
    <div className="mx-5 -translate-y-[6.5rem] flex flex-col">
      {getUrl.url.map((item) => (
        <div
          className="bg-[#fff] flex flex-col py-5 px-5 gap-3 mb-7 rounded-lg "
          key={item.secondInput + item.firstInput}
        >
          <p className="text-[1.2rem] tracking-[0.12px] font-medium leading-9 text-[#34313D]">
            {item.firstInput}
          </p>
          <hr />
          <p className="text-[1.2rem] tracking-[0.12px] font-medium leading-9 text-[#2BD0D0]">
            {item.secondInput}
          </p>
          {/* <p>{urlErr}</p> */}
          <div className="flex items-center justify-center ">
            <Button
              text={isCopied.includes(item.secondInput) ? "Copied" : "Copy"}
              style={`bg-[#2BD0D0] py-3 w-[21rem] min-[1024px]:w-[10rem] rounded-md text-[20px] font-bold text-[#fff] ${
                isCopied.includes(item.secondInput) &&
                "bg-[#3A3054] transition-all duration-500"
              }`}
              onHandleClick={() => handleCopyLink(item.secondInput)}
            />
            {/* <Button
              text={item.isCopied ? "Copied" : "Copy"}
              style={`bg-[#2BD0D0] py-3 w-[21rem] min-[1024px]:w-[10rem] rounded-md text-[20px] font-bold text-[#fff] ${
                isCopied.includes(item.secondInput) && "bg-[#3A3054]"
              }`}
              onHandleClick={() => handleCopyLink(item.secondInput)}
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkOutput;
