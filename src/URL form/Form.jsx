import React, { useState } from "react";

const Form = ({ children, input, handleSetInput, errMessage }) => {
  return (
    <div className="bg-[url('/images/bg-shorten-mobile.svg')] bg-[#3A3054] p-10 mx-5 flex flex-col items-center justify-center px-5 gap-5 rounded-lg  bg-cover mb-9 -translate-y-[6rem]">
      <div className="">
        <input
          type="text"
          placeholder={errMessage ? "No link here...💀" : "Shorten a link here..."}
          className={`py-4 pl-6 rounded-lg w-[19rem]  ${
            errMessage &&
            ` border-5 border-solid border-[#F46363] placeholder:text-[#ebbbbb]`
          } `}
          value={input}
          onChange={handleSetInput}
        />
        {errMessage && (
          <p className="text-[#F46363] italic mt-2">Please add a link</p>
        )}
      </div>

      {children}
    </div>
  );
};

export default Form;
