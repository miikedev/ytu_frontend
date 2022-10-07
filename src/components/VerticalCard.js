import React from "react";

function VerticalCard(props) {
  const cardInfo = props.cardInfo;

  return (
    <div className="mx-auto w-full px-1 md:px-2 lg:px-4">
      <div className="w-full">
        <img
          className="w-full object-cover object-center"
          src={cardInfo.imgSrc}
          alt="IDP"
        />
      </div>

      <div className="flex flex-col justify-between">
        <h2 className="text-lg md:text-xl lg:text-2xl semibold mt-6">
          {cardInfo.title}
        </h2>
        <p
          className={
            // "my-4 text-sm"
            `my-4 ${props.feature ? "text-base" : "text-sm text-gray-500"}`
          }
        >
          {cardInfo.description}
        </p>
        <p className="text-blue-500">See Details</p>
      </div>
    </div>
  );
}

export default VerticalCard;
