import React from "react";

function NewsCard(props) {
  const { imgSrc1, imgSrc2, date, title, description, btnText } =
    props.newsItem;
  return (
    <div className="mx-auto w-64 mb-10">
      <div className="grid grid-cols-2 space-x-0 relative">
        <img src={imgSrc1} alt={title} />
        <img src={imgSrc2} alt={title} />
        <div className="absolute bg-cyan-900 top-28 left-6 w-16 h-16 rounded-sm text-center py-1.5 text-white text-lg">
          <p>{date["month"]}</p>
          <p>{date["day"]}</p>
        </div>
      </div>
      <div className="space-y-4 mt-12 mb-10 ml-6">
        <h2 className="text-indigo-900 font-medium tracking-tight text-lg">
          {title}
        </h2>
        <p className="text-lg">{description}</p>
        <p className="text-blue-500">{btnText}</p>
      </div>
    </div>
  );
}

export default NewsCard;
