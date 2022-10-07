import React from "react";

function Mission() {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <div className="mx-10 md:mx-16 lg:mx-36 md:pt-20 pt-10">
      {/* Title */}
      <div className="flex space-x-9 items-center md:mb-10 mb-4">
        <h1 className="text-2xl md:text-4xl inline-block text-cyan-900 tracking-tight md:w-72 w-64">
          OUR MISSION
        </h1>
        <div className="hidden sm:inline-block h-0.5 w-full bg-cyan-900"></div>
      </div>

      {/* Body  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Mobile view  */}
        <div className="md:hidden flex flex-col items-center">
          <img src={`${publicURL}/utils/ytu.png`} alt="YTU Front View" />
        </div>
        <ul className="text-justify md:pr-5 lg:pr-10 md:pt-0 pr-2 pt-5 md:text-base text-xs">
          <li>
            To adopt the conception and to carry out the actions which would aid
            towards the progress of the University To thrive as a organization
            that could protect the rights and tackle the challenges of YTU
            students.
          </li>
          <li>
            To continuously ensure a quality education, academic freedom and a
            vivid university life for fellow students throughout the university
            education
          </li>
          <li>
            To become responsible citizens who can serve for the country, the
            people and the education, through the experiences and ideologies
            gained from the Union, after graduation.
          </li>
        </ul>

        {/* Desktop view  */}
        <div className="hidden md:flex flex-col items-center md:pl-5 lg:pl-10">
          <img src={`${publicURL}/utils/ytu.png`} alt="YTU Front View" />
        </div>
      </div>
    </div>
  );
}

export default Mission;
