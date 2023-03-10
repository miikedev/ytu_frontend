import React,{ useEffect, useState } from 'react'
import './css/Statements.css'
import '../components/Card.css'
import { studentsAssociations } from '../data/Data'
import { Associations } from '../components/Associations'
import '../components/Card.css'
import { PageTitle } from '../components/PageTitle'

//component
import { Component } from '../components/AssociationComponent'
//data
import { GET_STUDENT_ASSOCIATION_API } from "../services/CONSTANTS";
import { getApiDataService } from '../services/apiServices'

export const StudentAssociation = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getApiDataService(GET_STUDENT_ASSOCIATION_API(10))
      .then((res) => {
        console.log("st-association component data =", res);
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
            associationName= "Students' Association"
            component ={<Component associations={data}/>}
        />
    </div>
  )
}
