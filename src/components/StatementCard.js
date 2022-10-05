import React from "react";

function StatementCard(props) {
  const { imgSrc, title, description, date } = props.statementInfo;
  return (
    <div className="flex space-x-6 md:space-x-4 ld:space-x-10 mx-auto md:mx-8 mb-6 relative">
      <img
        className="mx-auto ms:h-60 md:max-w-80 h-48 max-w-68"
        src={imgSrc}
        alt={title}
      />
      <div className="min-w-40 max-w-sm my-5 space-y-2.5">
        <h3 className="text-cyan-900 text-lg font-medium">{title}</h3>
        <p className="md:text-lg">{description}</p>
        <p className="text-blue-500">{date}</p>
      </div>
    </div>
  );
}

export default StatementCard;
