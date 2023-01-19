import React, { useEffect, useState } from 'react'
import { Hero } from '../section/Hero'
import { Banner } from '../section/Banner'
import { Union } from '../section/Union'
import { Mission } from '../section/Mission'
import { News } from '../section/News'
import { Campaign } from '../section/Campaign'

//data
import {getHomeData} from '../services/homeService'

export const Home = () => {
  const [homePageData, setHomePageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Dashboard > gethomePageData called...");
    setIsLoading(true);
    getHomeData()
      .then((res) => {
        console.log("Home.js > Home=", res);
        setHomePageData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setHomePageData([]);
      });
    return () => {
      console.log("axios cleanup.");
    };
  }, []);

  console.log('homePageData : = ', homePageData)
  // const union = homePageData.section_text[0]
  // const mission = homePageData.section_text[1]
  return (
    <div>
        <Hero data={homePageData.banner} />
        <div>
          <Banner />
        </div>
        <div className='col-lg-11 col-12 mx-auto'>
          {/* <Union data={union} />
          <Mission data={mission}/> */}

          <News />
          <Campaign />
        </div>
        {/* <Union />
        <Mission />
        <News />
        <Campaign /> */}
    </div>
  )
}
