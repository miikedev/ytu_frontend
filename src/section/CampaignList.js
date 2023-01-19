import React from 'react'
import { CampaignItem } from '../components/CampaignItem'
import { CampaignItemTwo } from '../components/CampaignItemTwo'

export const CampaignList = () => {
  // const [campaign, setCampaign] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getRecentNewsData()
  //     .then((res) => {
  //       console.log("news component data =", res);
  //       setNews(res.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("axios err=", err);
  //       setIsLoading(false);
  //       setNews([]);
  //     });
  //   return () => {
  //     console.log("axios cleanup.");
  //   };
  // }, []);
  return (
    <div className=''>
        <CampaignItem />
        <CampaignItemTwo />
    </div>
  )
}
