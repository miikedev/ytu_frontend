import React from "react";

function ClubCard(props) {
  const { imgSrc, title, establishedYear } = props.clubInfo;
  return (
    <div className="mx-auto text-center lg:px-12 px-10 mb-16 lg:mb-20">
      <img className="mx-auto mb-3" src={imgSrc} alt={title} />
      <h3 className="text-cyan-800 text-xl tracking-tight">{title}</h3>
      {establishedYear && (
        <p className="text-gray-500">Established Year - {establishedYear}</p>
      )}
    </div>
  );
}

export default ClubCard;
