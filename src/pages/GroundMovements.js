import React,{useState,useEffect} from 'react'
import { Carousel } from '../components/Carousel'
import { PageTitle } from '../components/PageTitle'
import { Card } from '../components/Card'
import { YTU_SU_Campaign, YTU_SU_Protest } from '../data/CarouselData'

//data
import { GET_MOMENT_CAMPAIGN_API,GET_SPRING_REVOLUTION_API } from "../services/CONSTANTS";
import { getApiDataService } from '../services/apiServices'

export const GroundMovements = () => {
  const [campaigns, setCampaign] = useState([]);
  const [textSection, setTextSection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getApiDataService(GET_SPRING_REVOLUTION_API())
      .then((res) => {
        console.log("gm component data =", res);
        setTextSection(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setTextSection([]);
      });
   

    getApiDataService(GET_MOMENT_CAMPAIGN_API(10))
    .then((res) => {
      console.log("gm component data =", res);
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
    <div>
        <PageTitle pageTitle={textSection?.title}/>
        <p className='col-9 mt-4 text-center mx-auto'>{textSection?.description}</p>
        {
          campaigns.map(campaign =>{
            return (
              <div>
                <div className='px-4'>
                  <Card title={campaign?.title}/>
                </div>
                <Carousel imgData={campaign?.content_photos}/>
              </div>
            )
          }
          )
        }
       
        {/* <div>
          <div className='px-4'>
            <Card title="YTUSU Protests"/>
          </div>
          <Carousel imgData={YTU_SU_Protest}/>
        </div> */}
    </div>
  )
}
