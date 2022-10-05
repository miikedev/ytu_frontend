import React from "react";

function ClubCard(props) {
  const { imgSrc, title, establishedYear } = props.clubInfo;
  return (
    <div className="mx-auto text-center lg:px-12 lg:mb-12 px-10 mb-8">
      <img className="mx-auto" src={imgSrc} alt={title} />
      <h3>{title}</h3>
      {establishedYear && (
        <p className="text-gray-500">Established Year - {establishedYear}</p>
      )}
    </div>
  );
}

export default ClubCard;
