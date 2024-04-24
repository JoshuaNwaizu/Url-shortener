import React from "react";

const footerData = [
  {
    title: "Features",
    link1: "Link Shortening",
    link2: "Branded Links",
    link3: "Analytics",
    isLink4: false,
  },
  {
    title: "Resources",
    link1: "Blog",
    link2: "Developers",
    link3: "Support",
    isLink4: false,
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
        <div className="flex flex-col items-center justify-center gap-6">
          {footerData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center gap-7 text-center"
            >
              <h2 className="text-xl font-bold text-[#fff]">{item.title}</h2>
              <ul className="flex flex-col items-center justify-center gap-4 text-[#BFBFBF] font-medium cursor-pointer">
                <li>{item.link1}</li>
                <li>{item.link2}</li>
                <li>{item.link3}</li>
                <li> {item.isLink4 && item.link4}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterFeatures;
