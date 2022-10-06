import React from "react";
import News from "../components/News";
import news from "../data/news";

function NewsPage() {
  return (
    <>
      <div className="pt-6 pb-12 mx-auto">
        <h1 className="text-cyan-900 text-4xl tracking-tight text-center mb-2">
          News
        </h1>
        <div className=" w-full flex justify-center space-x-px">
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8  "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
          <div className="bg-cyan-900 inline-block h-1 w-8 "></div>
        </div>
      </div>
      <News news={news} />
    </>
  );
}

export default NewsPage;
