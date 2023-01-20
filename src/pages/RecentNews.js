import React, { useEffect, useState } from 'react'
import { news } from '../data/Data'
import { NewsComponent } from '../components/NewsComponent'
import '../components/Card.css'
import { PageTitle } from '../components/PageTitle'

//data
import {getRecentNewsData} from '../services/contentService'
export const RecentNews = () => {

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRecentNewsData(9)
      .then((res) => {
        console.log("news component data =", res);
        setNews(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setNews([]);
      });
    return () => {
      console.log("axios cleanup.");
    };
  }, []);

  return (
    <div>
        <PageTitle pageTitle="News"/>
        <div className='col-12 justify-content-center align-items-start d-flex flex-wrap gap-4 mt-5'>
        {news.map((item) => 
            <NewsComponent
            key={item.id}  
            ImgSrc={item.content_photos[0].photo}
            RightImgSrc={item.content_photos[1].photo}
            date={item.readable_created_at}
            category={item.type}
            title={item.title}
            />
        )}
        </div>
    </div>
  )
}
