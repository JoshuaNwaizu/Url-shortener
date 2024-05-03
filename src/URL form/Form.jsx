import { useEffect, useRef } from 'react';

const Form = ({ children, input, handleSetInput, errMessage }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    const inputCallBack = (e) => {
      if (e.code === 'Enter') {
        inputEl.current.focus();
      }
    };
    document.addEventListener('keydown', inputCallBack);

    return () => document.addEventListener('keydown', inputCallBack);
  }, []);
  return (
    <div
      id="form"
      className="bg-[url('/images/bg-shorten-mobile.svg')] bg-[#3A3054]   p-10 mx-6 flex flex-col items-center justify-center px-5 gap-5 rounded-lg bg-[length:450px_150px] bg-no-repeat mb-9 -translate-y-[6rem]  min-[720px]:flex-row  min-[720px]:bg-[url('/images/bg-shorten-desktop.svg')]   min-[720px]:bg-[length:850px_150px]  min-[768px]:-translate-y-[4rem] max-[375px]:mx-5  min-[768px]:mx-8  min-[820px]:mx-14 min-[884px]:mx-10 min-[884px]:p-9  min-[1024px]:bg-[length:950px_150px] min-[1024px]:mx-16 min-[1280px]:mx-[8.5rem] min-[1280px]:bg-[length:1050px_150px] min-[1400px]:bg-[length:1550px_150px] min-[1300px]:mx-[12rem]"
    >
      <div className="flex flex-col justify-center ">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className={`py-4 pl-6 rounded-lg w-[19rem]  placeholder:font-semibold max-[320px]:w-[14rem]  min-[768px]:w-[27rem] min-[884px]:w-[32rem] min-[1024px]:w-[41rem] min-[884px]:pl-4 min-[1400px]:w-[45rem]${
            errMessage &&
            ' border-[4px] min-[844px]:border-[3px] border-solid border-[#F46363] placeholder:text-[#ebbbbb] placeholder:font-semibold'
          } focus:border-[4px] min-[844px]:focus:border-[3px] focus:border-[#2BD0D0] focus:outline-none transition-all duration-100`}
          value={input}
          ref={inputEl}
          onChange={handleSetInput}
        />
        {errMessage && (
          <p className="text-[#F46363] italic mt-2 min-[884px]:m-0 min-[884px]:-mb-6">
            Please add a link
          </p>
        )}
      </div>

      {children}
    </div>
  );
};

export default Form;
