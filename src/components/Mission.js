import React from "react";

function Mission() {
  return (
    <div className="mx-16 lg:mx-36 pt-20">
      {/* Title */}
      <div className="flex space-x-9 items-center mb-10">
        <h1 className="text-4xl text-cyan-900 tracking-tight w-80">
          OUR MISSION
        </h1>
        <div className="hidden sm:inline-block h-0.5 w-full bg-cyan-900"></div>
      </div>

      {/* Body  */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Mobile view  */}
        <div className="md:hidden flex flex-col items-center">
          <img src="/utils/ytu.png" alt="YTU Front View" />
        </div>
        <ul className="text-justify md:pr-5 lg:pr-10 md:pt-0 pt-10">
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
          <img src="/utils/ytu.png" alt="YTU Front view" />
        </div>
      </div>
    </div>
  );
}

export default Mission;
