import React from "react";

const statistics = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    img: "/images/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    img: "/images/icon-detailed-records.svg",
    line: true,
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    img: "/images/icon-fully-customizable.svg",
    line: true,
    top: true,
  },
];

const ASCards = () => {
  return (
    <div className="mx-6 mt-24 mb-12  min-[768px]:mx-10 min-[820px]:mx-14 min-[884px]:mx-[5rem] min-[1024px]:mb-[10rem] min-[1280px]:mx-[8rem] min-[1400px]:mx-[12rem]">
      <div className="flex flex-col items-center justify-center gap-[6rem] min-[1024px]:flex-row min-[1024px]:gap-[2rem]">
        {statistics.map((item) => (
          <div key={item.description}>
            <div
              className={
                item.line
                  ? `bg-[#2BD0D0] min-[1024px]:h-[8px] min-[1024px]:w-[2rem] min-[1024px]:translate-y-[9rem] min-[1024px]:translate-x-[-2rem] ${
                      item.top && "min-[1024px]:translate-y-[10rem]"
                    } `
                  : undefined
              }
            ></div>
            <div
              className={`bg-[#fff]  flex flex-col items-center justify-center px-7 py-10 rounded-lg min-[1024px]:px-3 ${
                item.line ? "min-[1024px]:translate-y-10" : undefined
              } ${item.top ? "min-[1024px]:translate-y-[4.5rem]" : undefined}`}
            >
              <div
                className={
                  item.line
                    ? "flex flex-col items-center justify-center mt-[-3rem] translate-y-[-6rem] min-[1024px]:translate-y-[3rem] min-[1024px]:mt-[]"
                    : undefined
                }
              >
                <div
                  className={
                    item.line
                      ? "bg-[#2BD0D0] w-[8px] h-[9rem] translate-y-2 min-[1024px]:hidden "
                      : undefined
                  }
                ></div>

                <figure
                  className={`bg-[#3A3054] p-6 rounded-full -translate-y-[5rem] min-[1024px]:translate-x-[-5rem] min-[1024px]:p-5 ${
                    item.top ? "min-[1024px]:p-4" : undefined
                  }`}
                >
                  <img src={item.img} alt={item.name} />
                </figure>
              </div>

              <div
                className={`flex items-center justify-center flex-col gap-6 min-[1024px]:gap-3 min-[1024px]:items-start min-[1024px]:justify-start min-[1024px]:px-3 -mt-9  ${
                  item.line ? "mt-[-8rem] min-[1024px]:mt-[1rem]" : undefined
                }`}
              >
                <h1 className="text-2xl font-bold text-[#34313D]  min-[768px]:text-3xl min-[1024px]:text-xl min-[1024px]:text-center">
                  {item.title}
                </h1>
                <p className="text-center text-[#a8a4b3]  min-[768px]:text-xl  min-[768px]:px-4 min-[1024px]:text-xs min-[1024px]:text-left min-[1024px]:px-0">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ASCards;
