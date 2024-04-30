import React, { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";

const LinkOutput = ({ getUrl, urlErr }) => {
  const [isCopied, setIsCopied] = useState([]);

  const handleCopyLink = (item) => {
    navigator.clipboard.writeText(item);
    console.log("Copied:", item);

    setIsCopied((prevCopied) => [...prevCopied, item]);

    setTimeout(() => {
      setIsCopied([]);
    }, 10000);
  };
  return (
    <div className="mx-5 -translate-y-[6.5rem] flex flex-col min-[768px]:-translate-y-[5rem]  min-[768px]:mx-9 min-[820px]:mx-14  min-[884px]:mx-10 min-[884px]:justify-between min-[1024px]:mx-16 min-[1280px]:mx-[8.5rem] min-[1400px]:mx-[12rem]">
      {getUrl.url.map((item) => (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          className="bg-[#fff] flex flex-col py-5 px-5 gap-3 mb-7 rounded-lg  min-[768px]:items-center  min-[768px]:justify-center min-[884px]:flex-row  min-[884px]:justify-between  min-[1024px]:py-3 min-[1024px]:px-7  min-[1024px]:mb-4"
          key={item.secondInput + item.firstInput}
        >
          <div className="flex flex-col gap-3  min-[768px]:items-center  min-[768px]:justify-center  min-[884px]:flex  min-[884px]:flex-row min-[884px]:justify-between ">
            <p className="text-[1.2rem] tracking-[0.12px] font-medium leading-9 text-[#34313D]">
              {item.firstInput}
            </p>
            <div className="max-[568px]:hidden h-8 w-1 bg-[#2BD0D0] min-[720px]:hidden"></div>
            <hr className="  min-[768px]:min-[768px]:h-1  min-[768px]:w-[15rem]  min-[768px]:hidden" />
          </div>
          <div className="flex justify-center flex-col gap-3  min-[884px]:flex-row   min-[884px]:items-center ">
            <p
              className={`text-[1.2rem] tracking-[0.12px] font-medium leading-9 text-[#2BD0D0] ${
                !item.secondInput && "hidden"
              }`}
            >
              {item.secondInput}
            </p>
            {!item.secondInput && (
              <p className="text-[#F46363] text-[1.2rem] max-[320px]:text-[.9rem] tracking-[0.12px] font-medium leading-9">
                {urlErr}
              </p>
            )}
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              whileHover={{
                x: !item.secondInput ? [0, 10, -10, 10, -10, 10, 0] : 0,
              }}
              whileTap={{
                x: !item.secondInput ? [0, 10, -10, 10, -10, 10, 0] : 0,
              }}
              whileFocus={{
                x: !item.secondInput ? [0, 10, -10, 10, -10, 10, 0] : 0,
              }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <Button
                text={isCopied.includes(item.secondInput) ? "Copied!" : "Copy"}
                style={`bg-[#2BD0D0] py-3 max-[320px]:w-[15rem] w-[20rem]  min-[1024px]:w-[10rem] rounded-md text-[20px] font-bold text-[#fff] min-[768px]:w-[15rem] min-[884px]:w-[9rem] min-[1024px]:py-2 ${
                  !item.secondInput && "opacity-40 "
                } ${
                  isCopied.includes(item.secondInput) &&
                  "bg-[#3A3054] transition-all duration-150"
                }`}
                onHandleClick={() => handleCopyLink(item.secondInput)}
                disabled={!item.secondInput && true}
                // hover={item.secondInput && "#3A3054"}
                // tap={isCopied.includes(item.secondInput) && "#3A3054"}
                // focus={isCopied.includes(item.secondInput) & "#3A3054"}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LinkOutput;
