import React from "react";
import SwiperCoverFlow from "../components/SwiperCoverFlow";

import strikeData from "../data/strikes";

function GroundMovementsPage() {
  return (
    <>
      <div className="pt-6 pb-12 mx-auto">
        <h1 className="text-cyan-900 text-4xl tracking-tight text-center mb-2">
          Ground Movements / Strikes
        </h1>
        <div className=" w-full flex justify-center space-x-px">
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8  "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
        </div>
        <div className="text-center mx-auto lg:text-lg max-w-3xl pt-5 lg:pt-10">
          <p className="px-6 lg:px-0">
            Since Feb 1, 2021 Coup d'état, the union has called for strikes both
            on ground and online. For the first two months of coup, the union
            was able to organize massive protests and ground movements. Due to
            violent crack down and shooting on protests, the movement of
            revolution shifted to arm resistance. The strikers changed protests
            to flash mobs strikes and the union has been supporting and
            participating in them up to this day.
          </p>
        </div>
      </div>

      {strikeData.map((dataItem) => (
        <SwiperCoverFlow dataItem={dataItem} />
      ))}
    </>
  );
}

export default GroundMovementsPage;
