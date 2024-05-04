import React from 'react';
import Button from '../Button';
import { Link } from 'react-scroll';

const navListsItems = [
  {
    lists: [
      {
        name: 'Features',
        link: 'statistics',
      },
      {
        name: 'Pricing',
        link: 'home',
      },
      {
        name: 'Resources',
        link: 'home',
      },
    ],

    login: 'Login',
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
                >
                  <Link
                    to={list.link}
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={100}
                  >
                    <p
                      typeof="button"
                      onClick={() => setIsOpen(false)}
                    >
                      {list.name}
                    </p>
                  </Link>
                </li>
              ))}
            </div>
            <hr className="max-[1023px]:w-[20rem] max-[375px]:w-[14rem]" />
            <div className="flex  max-[1023px]:flex-col min-[1024px]:flex-row items-center gap-7 min-[1024px]:text-[#9E9AA8]  min-[1024px]:transition-all min-[1024px]:duration-200 min-[1280px]:mr-[2rem] min-[1400px]:mr-[4rem]">
              <p
                className="cursor-pointer min-[1024px]:hover:text-[#34313D] transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.login}
              </p>
              <div>
                <Button
                  style="bg-[#2BD0D0] max-[320px]:w-[14rem] py-3 w-[18rem] min-[1024px]:w-[9rem] rounded-[1.7rem] text-[20px] font-bold text-[#fff] min-[1024px]:py-2"
                  text="Sign Up"
                  hover={'#9AE3E3'}
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
