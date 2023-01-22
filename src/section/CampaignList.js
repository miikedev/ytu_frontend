import React, { useEffect, useState } from 'react'
import { CampaignItem } from '../components/CampaignItem'
import { CampaignItemTwo } from '../components/CampaignItemTwo'

//data
import { GET_RECENT_CAMPAIGN_API } from "../services/CONSTANTS";
import { getApiDataService } from '../services/apiServices'

export const CampaignList = () => {
  const [campaign, setCampaign] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getApiDataService(GET_RECENT_CAMPAIGN_API(3))
      .then((res) => {
        console.log("news component data =", res);
        setCampaign(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setCampaign([]);
      });
    return () => {
      console.log("axios cleanup.");
    };
  }, []);
  return (
    <div className=''>
        <CampaignItem data={campaign[0]}/>
        <CampaignItemTwo data={campaign[1]}/>
    </div>
  )
}
