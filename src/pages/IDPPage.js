import React from "react";
import HorizontalCard from "../components/HorizontalCard";
import VerticalCard from "../components/VerticalCard";

import idpDatas from "../data/idp";

const cardData = {
  title: "Let's have each other campaign",
  description:
    "YTUSU and UM1SU organized another donation campaign, after the “One Hand For Four Brothers Campaign”, to donate IDPs...",
};
function IDPPage() {
  return (
    <>
      {/* Header  */}
      <div className="pt-6 pb-12 mx-auto">
        <h1 className="text-cyan-900 text-4xl tracking-tight text-center mb-2">
          IDPS Support and Public Support
        </h1>
        <div className=" w-full flex justify-center space-x-px">
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8  "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
        </div>
        <div className="text-center mx-auto lg:text-lg max-w-3xl pt-5 lg:pt-10">
          <p className="px-6 lg:px-0">
            The Union has been helping IDPs in many regions. Most of our
            activities are in Karenni State as we will base there for the
            revolution period. We also help the IDPs in Sagaing, Chin, Kachin
            and Karen through reliable local organizations. We help IDPs mostly
            by fundraising and sometimes by individual donors.
          </p>
        </div>
      </div>

      {/* Feature + Horizontal Card  */}
      <div className="grid grid-cols-11 px-4 md:px-16 lg:px-36">
        <div className="px-5 lg:my-16 md:my-6 my-4 col-span-11 lg:col-span-5">
          <VerticalCard cardInfo={idpDatas.feature} feature={true} />
        </div>
        <div className="px-0 lg:px-5 lg:my-16 md:my-8 my-4 col-span-11 lg:col-span-6 flex flex-col justify-between gap-4 lg:gap-0">
          {idpDatas.horizontalCardData.map((horizontalData) => (
            <HorizontalCard
              key={`${horizontalData.title}`}
              cardInfo={horizontalData}
            />
          ))}
        </div>
      </div>

      {/* Vertical Card  */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-32 md:px-16 px-4">
        {idpDatas.verticalCardData.map((verticalData) => (
          <div
            key={`${verticalData.title}`}
            className="px-5 lg:my-16 md:my-8 my-4"
          >
            <VerticalCard cardInfo={verticalData} />
          </div>
        ))}
      </div>

      {/* Footer Card */}
      <div className="grid grid-cols-11 px-4 md:px-16 lg:px-36">
        <div className="px-0 lg:px-5 lg:my-16 md:my-8 my-4 col-span-11 lg:col-span-6 flex flex-col justify-between gap-4 lg:gap-0">
          {idpDatas.footerCardData.map((footerCardData) => (
            <HorizontalCard
              key={`${footerCardData.title}`}
              cardInfo={footerCardData}
            />
          ))}
        </div>
        <div className="px-5 lg:my-16 md:my-6 my-4 col-span-11 lg:col-span-5">
          <img src={idpDatas.fundRaising} alt="SU Fund Raising" />
        </div>
      </div>
    </>
  );
}

export default IDPPage;
