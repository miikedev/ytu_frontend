import React from "react";
import NewsCard from "./NewsCard";

function News(props) {
  const news = props.news;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:mx-44 lg:mx-36 md:mx-10 mx-auto ">
      {news.map((newsItem) => {
        return <NewsCard key={`news-${newsItem.id}`} newsItem={newsItem} />;
      })}
    </div>
  );
}

export default News;
