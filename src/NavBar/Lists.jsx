import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";

const navListsItems = [
  {
    lists: ["Features", "Pricing", "Resources"],
    login: "Login",
  },
];
const Lists = ({ setIsOpen }) => {
  return (
    <>
      {navListsItems.map((item, index) => (
        <div
          className="flex flex-col min-[1024px]:ml-[12rem] min-[1152px]:ml-[13rem] justify-center items-center max-[1023px]:h-full gap-5 max-[1023px]:py-1 min-[1024px]:justify-between  max-[884px]:backdrop-blur-sm"
          key={index}
        >
          <ul className="flex max-[1023px]:flex-col min-[1024px]:flex-row items-center gap-10 max-[1023px]:bg-[#3A3054] max-[1023px]:py-8 max-[1023px]:w-[90%] max-[1023px]:text-xl max-[1023px]:font-bold text-center max-[1023px]:text-[#fff] rounded-xl  min-[1024px]:w-[80%] min-[1024px]:justify-between z-20 min-[884px]:w-[70%] ">
            <div className=" flex min-[1024px]:flex-row flex-col gap-6 max-[1023px]:gap-9 justify-center items-center">
              {item.lists.map((list, index) => (
                <li
                  key={index}
                  className="min-[1024px]:text-[#9E9AA8] min-[1024px]:hover:text-[#34313D] min-[1024px]:transition-all min-[1024px]:duration-200 cursor-pointer "
                  onClick={() => setIsOpen(false)}
                >
                  <p typeof="button">{list}</p>
                </li>
              ))}
            </div>
            <hr className="max-[1023px]:w-[20rem] " />
            <div className="flex  max-[1023px]:flex-col min-[1024px]:flex-row items-center gap-7 min-[1024px]:text-[#9E9AA8]  min-[1024px]:transition-all min-[1024px]:duration-200 min-[1280px]:mr-[2rem]">
              <p
                className="cursor-pointer min-[1024px]:hover:text-[#34313D]"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                {item.login}
              </p>
              <div>
                <Button
                  style="bg-[#2BD0D0] py-3 w-[18rem] min-[1024px]:w-[9rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff] min-[1024px]:py-2"
                  text="Sign Up"
                  onHandleClick={() => setIsOpen(false)}
                />
              </div>
            </div>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Lists;
