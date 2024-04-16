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
          className="flex flex-col justify-center items-center h-full gap-5 py-1"
          key={index}
        >
          <ul className="flex flex-col items-center gap-7 bg-[#3A3054] py-8 w-[90%] text-xl font-bold text-center text-[#fff] rounded-xl ">
            {item.lists.map((list, index) => (
              <li key={index}>
                <p className="">{list}</p>
              </li>
            ))}
            <hr className="w-[15rem]" />
            <div className="flex flex-col items-center gap-7">
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
