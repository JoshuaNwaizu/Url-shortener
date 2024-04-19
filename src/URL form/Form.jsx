import React from "react";

const Form = ({ children }) => {
  return (
    <div className="bg-[url('/images/bg-shorten-mobile.svg')] bg-[#3A3054] p-10 mx-5 flex flex-col items-center justify-center gap-5 rounded-lg -translate-y-[6rem] bg-cover ">
      <div className="">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="py-4 pl-6 rounded-lg "
        />
        <p className="text-[#F46363] italic mt-2">Please add a link</p>
      </div>

      {children}
    </div>
  );
};

export default Form;
