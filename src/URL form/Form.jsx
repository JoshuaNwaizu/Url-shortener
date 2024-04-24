const Form = ({ children, input, handleSetInput, errMessage }) => {
  return (
    <div className="bg-[url('/images/bg-shorten-mobile.svg')] bg-[#3A3054] p-10 mx-6 flex flex-col items-center justify-center px-5 gap-5 rounded-lg bg-[length:450px_150px] bg-no-repeat mb-9 -translate-y-[6rem]">
      <div>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={`py-4 pl-6 rounded-lg w-[19rem]  placeholder:font-semibold ${
            errMessage &&
            " border-[4px] border-solid border-[#F46363] placeholder:text-[#ebbbbb] placeholder:font-semibold"
          } focus:border-[4px] focus:border-[#2BD0D0] focus:outline-none transition-all duration-150`}
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
