import React from "react";

const footerData = [
  {
    title: "Features",
    link1: "Link Shortening",
    link2: "Branded Links",
    link3: "Analytics",
  },
  {
    title: "Resources",
    link1: "Blog",
    link2: "Developers",
    link3: "Support",
  },
  {
    title: "Company",
    link1: "About",
    link2: "Our Team",
    link3: "Careers",
    link4: "Contact",
    isLink4: true,
  },
];

const FooterFeatures = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-[3.5rem]">
        <h1 className="text-[2.7rem] font-bold text-[#FFF]">Shortly</h1>
        <div className="flex flex-col items-center justify-center gap-6  min-[768px]:flex-row  min-[768px]:gap-[8rem]  min-[768px]:items-start">
          {footerData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-7 text-center  min-[768px]:text-left  min-[768px]:items-start"
            >
              <h2 className="text-xl font-bold text-[#fff]">{item.title}</h2>
              <ul className="flex flex-col items-center justify-center gap-4 text-[#BFBFBF] font-medium cursor-pointer  min-[768px]:items-start">
                <li>{item.link1}</li>
                <li>{item.link2}</li>
                <li>{item.link3}</li>
                <li> {item.isLink4 ? item.link4 : undefined}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterFeatures;
