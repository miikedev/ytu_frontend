import ClubCard from "./ClubCard";

import React from "react";

function Clubs(props) {
  const clubsInfo = props.clubsInfo
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mx-36 md:mx-12 mx-auto ">
      {clubsInfo.map((clubInfo) => {
        return <ClubCard key={clubInfo.clubId} clubInfo={clubInfo} />;
      })}
    </div>
  );
}

export default Clubs;
