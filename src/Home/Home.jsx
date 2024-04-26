import React from "react";

const Home = ({ children }) => {
  return (
    <section className="mt-[5rem] overflow-x-hidden min-[768px]:flex min-[768px]:flex-row  min-[768px]:justify-center  min-[768px]:items-center min-[768px]:mt-[7rem]  min-[768px]:ml-7  min-[820px]:ml-9 min-[884px]:ml-12 min-[1024px]:ml-16  min-[1024px]:mt-[9rem]  min-[1024px]:mb-[-3.5rem] min-[1280px]:ml-[6rem]">
      {children}
    </section>
  );
};

export default Home;
