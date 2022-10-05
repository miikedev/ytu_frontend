import ClubCard from "./ClubCard";
import clubsInfo from "../data/clubs";

import React from "react";

function Clubs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mx-36 md:mx-12 mx-auto ">
      {clubsInfo.map((clubInfo) => {
        return <ClubCard key={clubInfo.clubId} clubInfo={clubInfo} />;
      })}
    </div>
  );
}

export default Clubs;
