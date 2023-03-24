import React, { useEffect, useState } from 'react'
import { Hero } from '../section/Hero'
import { Banner } from '../section/Banner'
import { Union } from '../section/Union'
import { Mission } from '../section/Mission'
import { News } from '../section/News'
import { Campaign } from '../section/Campaign'

//data
import { GET_HOME_PAGE_API } from "../services/CONSTANTS";
import { getApiDataService } from '../services/apiServices'

export const Home = () => {
  const [homePageData, setHomePageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Dashboard > gethomePageData called...");
    setIsLoading(true);
    getApiDataService(GET_HOME_PAGE_API)
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
  const union = homePageData.section_text?homePageData.section_text[0]:null
  const mission = homePageData.section_text?homePageData.section_text[1]:null
  return (
    <div className='col-12' id='home'>
        <Hero data={homePageData.banner} />
        <div>
          <Banner />
        </div>
        <div>
          <Union data={union} />
          <Mission data={mission}/>

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
