import React from "react";

function Banner() {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <div className="w-full py-16 lg:px-12 md:px-10 px-6 bg-hero-img bg-cover bg-no-repeat bg-center">
      <div className="max-w-6xl lg:px-12 md:px-10 px-6 py-10 mx-auto bg-white flex flex-col items-center space-y-4 opacity-80 rounded-tr-[30px] rounded-bl-[30px]">
        <img
          src={`${publicURL}/utils/ytu_logo.png`}
          alt="Yangon Technological University Logo"
        />
        <h1 className="lg:text-4xl md:text-2xl text-lg text-cyan-900 ">
          THE UNIVERSITY
        </h1>
        <p className="lg:text-base md:text-sm text-xs font-semibold">
          BIT-RIT-YIT-YTU
        </p>
        <p className="lg:text-lg md:text-base text-xs mx-auto text-center">
          For four generations from BIT of colonial age to YTU of democracy age,
          YTU has been the premiere university of engineering in Myanmar.
          Located in Insein, the university boasts a large campus with the
          country's best facilities. After years of closing undergraduate
          programs as a result of the nation wide 8888 uprisings, YTU finally
          reopened its undergraduate programs in 2012. Since then, YTU offers 14
          undergraduate engineering and architecture programs, a range of post
          graduate and doctorate programs. Due to ongoing Spring Revolution, the
          physical campus is temporarily closed and the education services can
          be acquired only from online via university official website (insert
          link). The teachers and students are also joining Civil Disobedience
          Movement and also participating in various sectors of revolution.
        </p>
      </div>
    </div>
  );
}

export default Banner;
