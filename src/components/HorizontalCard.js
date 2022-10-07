import React from "react";

function HorizontalCard(props) {
  const cardInfo = props.cardInfo;
  return (
    <div className="flex w-full">
      <div className="mx-6 min-w-max">
        <img
          className="w-36 h-36 lg:w-52 lg:h-36 object-cover object-center rounded-lg"
          src={cardInfo.imgSrc}
          alt="idp"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-xl lg:text-2xl semibold">{cardInfo.title}</h2>
        <p className="my-2 text-gray-500 lg:my-4 text-xs lg:text-sm">
          {cardInfo.description}
        </p>
        <p className="text-blue-500">See Details</p>
      </div>
    </div>
  );
}

export default HorizontalCard;
