import React,{ useEffect,useState} from 'react'
import { Associations } from '../components/Associations'
import { clubs } from '../data/Club'
import { BsCalendarWeek } from 'react-icons/bs'
import '../components/Card.css'


//component
import { Component } from '../components/AssociationComponent'
//data
import {getStudentClubData} from '../services/studentAssociationService'


export const StudentsClubs = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStudentClubData()
      .then((res) => {
        console.log("st-club component data =", res);
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
          associationName="Students' Clubs" 
          component={<Component associations={data}/>} 
        />
    </div>
  )
}
