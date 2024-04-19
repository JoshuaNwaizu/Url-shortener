import React from "react";

const LinkOutput = ({ children }) => {
  const urlLink = "https://www.linkedin.com/company";

  const shortLink = urlLink.split("").slice(0, 24).join("") + "...";

  return (
    <div className="mx-5">
      <div className="bg-[#fff] flex flex-col py-5 px-5 gap-3">
        <p>{shortLink}</p>
        <hr />
        <p>https://tinyurl.com/284vokrm</p>
        {children}
      </div>
    </div>
  );
};

export default LinkOutput;
