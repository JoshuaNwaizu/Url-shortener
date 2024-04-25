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
  },
];

const ASCards = () => {
  return (
    <div className="mx-6 mt-24 mb-12  min-[768px]:mx-10 min-[820px]:mx-14 min-[884px]:mx-[5rem]">
      <div className="flex flex-col items-center justify-center gap-[6rem]">
        {statistics.map((item) => (
          <div key={item.description}>
            <div className="bg-[#fff]  flex flex-col items-center justify-center px-7 py-10 rounded-lg">
              <div
                className={
                  item.line
                    ? "flex flex-col items-center justify-center mt-[-3rem] translate-y-[-6rem]"
                    : undefined
                }
              >
                <div
                  className={
                    item.line
                      ? "bg-[#2BD0D0] w-[8px] h-[9rem] translate-y-2 "
                      : undefined
                  }
                ></div>

                <figure className="bg-[#3A3054] p-6 rounded-full -translate-y-[5rem]">
                  <img src={item.img} alt={item.name} />
                </figure>
              </div>
              <div
                className={`flex items-center justify-center flex-col gap-6 -mt-9 ${
                  item.line ? "mt-[-8rem]" : undefined
                }`}
              >
                <h1 className="text-2xl font-bold text-[#34313D]  min-[768px]:text-3xl">
                  {item.title}
                </h1>
                <p className="text-center text-[#a8a4b3]  min-[768px]:text-xl  min-[768px]:px-4">
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
