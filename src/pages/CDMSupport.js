import React, { useEffect, useState } from 'react'
import { PageTitle } from '../components/PageTitle'
import { OulineBtn } from '../components/OulineBtn'
import { CDMSupport1 } from '../components/CDM_Support/CDMSupport1'
import { CDMSupport2 } from '../components/CDM_Support/CDMSupport2'

//data
import { GET_SPRING_REVOLUTION_API,GET_ACTIVITIES_API,GET_CDM_SUPPORT_API } from "../services/CONSTANTS";
import { getApiDataService } from '../services/apiServices'

export const CDMSupport = () => {
  const [cdmSupports,setCdmSupports] = useState([]);
  const [activities,setActivities] = useState([]);
  const [textSection, setTextSection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getApiDataService(GET_SPRING_REVOLUTION_API())
      .then((res) => {
        setTextSection(res.data[1]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setTextSection([]);
      });

      
      getApiDataService(GET_ACTIVITIES_API(10))
      .then((res) => {
        setActivities(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setActivities([]);
      });


      getApiDataService(GET_CDM_SUPPORT_API(10))
      .then((res) => {
        setActivities(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setActivities([]);
      });
   
  return () => {
    console.log("axios cleanup.");
  };
  }, []);

  return (
    <div>
        <PageTitle pageTitle={textSection?.title}/>
        <p className='col-lg-9 col-md-11 col-sm-12 mt-4 text-center mx-auto'>{textSection?.description}</p>
        <div className='mx-auto text-center'>
            <OulineBtn btnName="Donate Now"/>
        </div>
        <CDMSupport1 data={activities} />
        <CDMSupport2 />
    </div>
  )
}
