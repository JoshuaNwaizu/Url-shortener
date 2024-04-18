import React from "react";
import Button from "../assets/Button";

const navListsItems = [
  {
    lists: ["Features", "Pricings", "Resources"],
    login: "Login",
  },
];
const Lists = () => {
  return (
    <>
      {navListsItems.map((item, index) => (
        <div
          className="flex flex-col min-[1024px]:ml-32 min-[1152px]:ml-[13rem] justify-center items-center max-[1023px]:h-full gap-5 max-[1023px]:py-1 min-[1024px]:justify-between"
          key={index}
        >
          <ul className="flex max-[1023px]:flex-col min-[1024px]:flex-row items-center gap-10 max-[1023px]:bg-[#3A3054] max-[1023px]:py-8 max-[1023px]:w-[90%] max-[1023px]:text-xl max-[1023px]:font-bold text-center max-[1023px]:text-[#fff] rounded-xl min-[1024px]:justify-center min-[1024px]:w-[80%] min-[1024px]:justify-between z-20">
            <div className=" flex min-[1024px]:flex-row flex-col gap-6 max-[1023px]:gap-9 justify-center items-center">
              {item.lists.map((list, index) => (
                <li
                  key={index}
                  className="min-[1024px]:text-[#9E9AA8] min-[1024px]:hover:text-[#34313D] min-[1024px]:transition-all min-[1024px]:duration-200 cursor-pointer "
                >
                  <p className="">{list}</p>
                </li>
              ))}
            </div>
            <hr className="max-[1023px]:w-[20rem] " />
            <div className="flex cursor-pointer max-[1023px]:flex-col min-[1024px]:flex-row items-center gap-7 min-[1024px]:text-[#9E9AA8] min-[1024px]:hover:text-[#34313D] min-[1024px]:transition-all min-[1024px]:duration-200">
              <p> {item.login}</p>
              <Button text="Sign Up" />
            </div>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Lists;