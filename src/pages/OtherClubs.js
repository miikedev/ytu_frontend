import React,{useEffect,useState} from 'react'
import { Associations } from '../components/Associations'
import { clubs } from '../data/Club'
import { BsCalendarWeek } from 'react-icons/bs'


//component
import { Component } from '../components/AssociationComponent'
//data
import {getOtherClubData} from '../services/studentAssociationService'


export const OtherClubs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOtherClubData()
      .then((res) => {
        console.log("other-club component data =", res);
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("axios err=", err);
        setIsLoading(false);
        setData([]);
      });
    return () => {
      console.log("axios cleanup.");
    };
  }, []);
  
  
  return (
    <div>
        <Associations 
            associationName="Others Clubs"
            component={<Component associations={data} />}
        />
    </div>
  )
}
