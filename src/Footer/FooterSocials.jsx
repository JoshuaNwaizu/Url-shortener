import React from "react";

const footerImages = [
  {
    urls: "/images/icon-facebook.svg",
    alt: "facebook",
  },
  {
    urls: "/images/icon-twitter.svg",
    alt: "Twitter",
  },
  {
    urls: "/images/icon-pinterest.svg",
    alt: "pinterest",
  },
  {
    urls: "/images/icon-instagram.svg",
    alt: "instagram",
  },
];

const FooterSocials = () => {
  return (
    <div className="mt-[4rem] mb-5">
      <div className="flex flex-row items-center justify-center gap-6">
        {footerImages.map((img) => (
          <div key={img.urls}>
            <img src={img.urls} alt={img.alt} className="h-[24px] cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSocials;
